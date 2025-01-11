const { defineConfig } = require("cypress")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://paciente-staging.lacreisaude.com.br/',
    experimentalRunAllSpecs: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/**/*.feature"
  },
});
