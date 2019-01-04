describe('The Home Page', () => {
    it('successfully loads', function() {
    cy.visit('/')
    cy.title().should('include', 'CreditoApp')
    cy.get('.login > .card').contains('Sign In')
    cy.get('app-register > .card').contains('Sign Up')
    cy.get('.login > .card > .mat-card-actions > .mat-raised-button').contains('Login').click()
    cy.get('app-register > .card > .mat-card-actions > .mat-raised-button').contains('Sign Up').click()
  });
});

