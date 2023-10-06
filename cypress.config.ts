import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'phonebook-ql',
  component: {
    specPattern: ['app/**/*.cy.{ts,tsx}', 'components/**/*.cy.{ts,tsx}'],
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  },
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{ts,tsx}',
    baseUrl: 'http://localhost:3033',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
