import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    web_accessible_resources: [
      {
        resources: ["entrypoints/Dashboard/index.html"],
        matches: ["<all_urls>"]
      }
    ],
    host_permissions: ["<all_urls>"]
  }
});
