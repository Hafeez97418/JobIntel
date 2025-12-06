export default defineContentScript({
  matches: ["*://www.linkedin.com/jobs/*"],
  runAt: "document_start", // OK — we will wait for DOM ourselves
  main() {
    waitForLinkedIn().then(() => {
      console.log("[READY] LinkedIn detected, starting observer...");
      startNavigationObserver();
      handleJobPage(); // initial load
    });
  },
});

/* --------------------------------------------------
   1) Wait until LinkedIn's JS finishes hydrating the page
-------------------------------------------------- */
async function waitForLinkedIn(): Promise<void> {
  // LinkedIn takes time to hydrate the SPA DOM
  while (document.readyState !== "complete") {
    await sleep(150);
  }

  // Wait until the main React container becomes available
  await waitForElement("#main");
}

/* --------------------------------------------------
   2) Navigation observer (LinkedIn is an SPA)
-------------------------------------------------- */
function startNavigationObserver() {
  let lastUrl = location.href;

  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      handleJobPage();
    }
  });

  observer.observe(document, { subtree: true, childList: true });
}

/* --------------------------------------------------
   3) Main job page handler
-------------------------------------------------- */
async function handleJobPage() {
  console.log("🔍 Job page changed");

  // Wait for job panel to load
  await waitForElement(".job-details-jobs-unified-top-card__job-title", 8000);

  const jobData = await extractJobData();
  console.log("📄 Extracted Job Data:", jobData);
}

/* --------------------------------------------------
   4) Job data extraction
-------------------------------------------------- */
async function extractJobData() {
  return {
    title: await getText(".job-details-jobs-unified-top-card__job-title"),
    company: await getText(".job-details-jobs-unified-top-card__company-name"),
    primaryDescription: await getText(".job-details-jobs-unified-top-card__primary-description-container"),

    // Full job description lives inside complicated shadow DOM + async load
    mainDescription: await getTextFromDeep("#job-details"),
  };
}

/* --------------------------------------------------
   Helper functions
-------------------------------------------------- */

// Normal DOM selector (with waiting)
async function getText(selector: string): Promise<string | null> {
  const el = await waitForElement(selector, 5000).catch(() => null);
  return el?.textContent?.trim() ?? null;
}

// Extract text even if element is inside shadow roots
async function getTextFromDeep(selector: string): Promise<string> {
  const el = await waitForDeepElement(selector, 6000);
  if (!el) return "";
  return stripHTML(el.innerHTML);
}

/* --------------------------------------------------
   DOM Utilities
-------------------------------------------------- */

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForElement(selector: string, timeout = 5000): Promise<Element> {
  return new Promise((resolve, reject) => {
    const found = document.querySelector(selector);
    if (found) return resolve(found);

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document, { subtree: true, childList: true });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error("Timeout waiting for: " + selector));
    }, timeout);
  });
}

/* --------------------------------------------------
   Shadow DOM search (recursive)
-------------------------------------------------- */
async function waitForDeepElement(selector: string, timeout = 6000): Promise<HTMLElement | null> {
  let start = Date.now();

  while (Date.now() - start < timeout) {
    const found = deepQuerySelector(document, selector);
    if (found) return found as HTMLElement;

    await sleep(120);
  }

  return null;
}

function deepQuerySelector(root: Node, selector: string): Element | null {
  if (!(root instanceof Element || root instanceof Document || root instanceof ShadowRoot)) return null;

  const normal = root.querySelector(selector);
  if (normal) return normal;

  const shadows = Array.from(root.querySelectorAll("*")).filter(el => (el as any).shadowRoot);
  for (const s of shadows) {
    const found = deepQuerySelector((s as any).shadowRoot, selector);
    if (found) return found;
  }

  return null;
}

/* --------------------------------------------------
   Strip HTML → text
-------------------------------------------------- */
function stripHTML(htmlString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent?.trim() || "";
}
