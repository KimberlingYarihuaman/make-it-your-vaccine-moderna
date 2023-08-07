const { defineConfig } = require("cypress");

module.exports = defineConfig({
  isMobile: false,
  viewportWidth: 390,
  viewportHeight: 844,

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://www.makeityourvaccine.com/",
    specPattern: "./cypress/e2e/miyv-us/**/*.spec.js",
  },
});
