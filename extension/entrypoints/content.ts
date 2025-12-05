export default defineContentScript({
  matches: ["*://www.linkedin.com/jobs/*"],
  runAt: "document_idle",
  main() {
    console.log("LinkedIn Jobs page detected");

    const body = document.body;
    handleJobsPage(body);
  },
});


function stripHTML(htmlString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}


function handleJobsPage(body: HTMLElement) {
  //pending
}

