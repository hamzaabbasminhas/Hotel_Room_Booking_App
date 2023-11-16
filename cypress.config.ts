import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/src/specs/*.js',
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    charts: true,
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
    },
    baseUrl: 'http://localhost:3000/',
    video: true,
  },
});
