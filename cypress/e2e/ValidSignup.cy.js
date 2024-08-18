/// <reference types ="cypress"/>
it('Check Valid signup on first page', () => {
    cy.visit("business-signup")
    // I realise randomly adding a new email each time this test is run probably isn't best practice, should probably be accompanied
    // by backend method to remove @example.com emails
    cy.get('[data-testid="registration-email"]').type('hello' + Math.random().toString() + '@example.com{Enter}')
    cy.get('[data-testid="registration-password"]').type('Hell0Wor!d')
    cy.get('[data-testid="ds-minimum-length-feedback"] > .sc-kBRoID > [data-testid="ds-alert-brand-check-icon ds-check-circle-icon"] > path')
    cy.get('[data-testid="ds-numeric-feedback"] > .sc-kBRoID > [data-testid="ds-alert-brand-check-icon ds-check-circle-icon"] > path')
    cy.get('[data-testid="ds-symbol-feedback"] > .sc-kBRoID > [data-testid="ds-alert-brand-check-icon ds-check-circle-icon"] > path')
    cy.get('[data-testid="ds-letter-casing-feedback"] > .sc-kBRoID > [data-testid="ds-alert-brand-check-icon ds-check-circle-icon"] > path')
    cy.get('.sc-RYuTI').click()
    cy.get('[data-testid="email-sign-up"]').click()
})