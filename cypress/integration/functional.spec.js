///<reference types="cypress" />

describe('Should test at a functional level', () => {
    

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('programador21@gmail.com')
        cy.get('[data-test="passwd"]').type('maluco123')
        cy.get('.btn').click()
        cy.get('.toast').should('contain',('Bem vindo'))
    });

    it('login', () => {
        
        
    });
   
    
})