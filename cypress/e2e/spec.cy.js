/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('cypress/fixtures/scroll-smooth.html')
    cy.get('html').should('have.css', 'scroll-behavior', 'smooth')
    cy.contains('Click Me to Smooth Scroll to Section 2 Below').click()
    cy.wait(1000) // wait to demonstrate smooth scroll in UI
    cy.contains('Click Me to Smooth Scroll to Section 1 Above').click()
  })
})
