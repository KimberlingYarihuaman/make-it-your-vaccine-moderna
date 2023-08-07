const { defineConfig } = require("cypress");

module.exports = defineConfig({
  isMobile: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://www.makeityourvaccine.com/",
    specPattern: "./cypress/e2e/miyv-au/**/*.spec.js",
  },
});
