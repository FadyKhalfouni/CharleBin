const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    reporter: 'junit',
    reporterOptions: {
      mochaFile: '../.githubs/cypress.xml',
      toConsole: false
    }
  }
})
