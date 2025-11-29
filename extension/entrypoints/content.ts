
export default defineContentScript({
  matches: ["<all_urls>"],
  runAt: "document_idle",
  main() {
    console.log("Content loaded on:", window.location.hostname);
  }
});

