// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
   Cypress.Commands.add("login", (user) => {
       // Escribir el email del usuario
  cy.get('#mat-input-0').type(user.email);

  // Escribir una contraseña incorrecta
  cy.get('#mat-input-1').type(user.password);

  // Click sobre el botón **Submit**
  cy.get('.login > .card > .mat-card-actions > .mat-raised-button').click();

    })
//
  Cypress.Commands.add("reserva", (proveedor) => {
    // Escribir el cif del proveedor
    cy.get('#mat-input-8').type(proveedor.cif);

    //Selección concepto de gasto
    cy.get('#mat-input-9').type(proveedor.concepto);

    //Escriba presupuesto
    cy.get('#mat-input-10').type(proveedor.presupuesto);
    
    // Click sobre el botón **Submit**
    cy.get('.app-formulario > :nth-child(1) > .card > .mat-card-actions > .mat-raised-button').click();

   })
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
