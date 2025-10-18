// This file controls popup interface, displaying AI insights and handling user actions.

document.addEventListener("DOMContentLoaded", async () => {
  // Get active tab
  await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs.length > 0) {
      console.log(`title : ${tabs[0].title} id : ${tabs[0].id} url: ${tabs[0].url}`);
    } else {
      console.error("No active tab found");
    }
  });
});
