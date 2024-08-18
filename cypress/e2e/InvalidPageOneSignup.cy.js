it('email without @ symbol', () => {
    cy.visit("business-signup")
    cy.get('[data-testid="registration-email"]').type('hello')
})