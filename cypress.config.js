const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "szbr1p",
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results.json',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Artemis',
      overwrite: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      autoOpen: false,
      quite: true,
      html: false,
      json: true
    },
  },
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/api/**/*.cy.{js,jsx,ts,tsx}"
    ]
  },
});