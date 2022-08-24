/// <reference types="cypress" />
describe('page', () => {
  const windowScrollY = {
    initial: '',
    scrolled: ''
  };

  it('scrolls on generic page', () => {
    cy.visit('cypress/fixtures/scroll-smooth.html')
    cy.get('html').should('have.css', 'scroll-behavior', 'smooth')
    // cy.get('html').then($el => $el.css('scroll-behavior', 'auto')) // UNCOMMENT THIS AND THE TEST WILL PASS

    // Step 1: get baseline values for initial and scrolled window.scrollY
    cy.contains('Click Me to Smooth Scroll to Section 1 Above').click()
    cy.wait(1000) // wait so we can see smooth scroll in UI
    cy.window().then(window => {
      windowScrollY.initial = window.scrollY
    })

    cy.contains('Click Me to Smooth Scroll to Section 2 Below').click()
    cy.wait(1000) // wait so we can see smooth scroll in UI
    cy.window().then(window => {
      windowScrollY.scrolled = window.scrollY
    })

    // Step 2: scroll again, and check if values are the same
    cy.contains('Click Me to Smooth Scroll to Section 1 Above').click()
    cy.wait(1000) // wait so we can see smooth scroll in UI
    cy.window().then(window => {
      expect(window.scrollY).to.equal(windowScrollY.initial)
    })
  })

  it("scrolls on nauc-me-it page", () => {
    /* Uncomment line 39 and notice how the first nav link DOES smooth scroll, but the rest of them do not */
    cy.visit("https://nauc-me-it-pegak.vercel.app/")
    cy.viewport(1920, 1080)
    cy.get('html').should('have.css', 'scroll-behavior', 'smooth')
    // cy.get('html').then($el => $el.css('scroll-behavior', 'auto')) // UNCOMMENT THIS AND THE TEST WILL PASS
    cy.get('nav a')
      .filter('a[href^="/#"]')
      .each($el => {
        cy.get($el).click()
        cy.wait(1000) // wait so we can see smooth scroll in UI
      })

  })
})
