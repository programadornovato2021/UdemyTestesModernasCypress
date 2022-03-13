///<reference types="cypress" />

describe('Esperas...', () => {
    

    before(() => {
        cy.reload
    });

    beforeEach(() => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
    });
    
    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    });

    it('Deve fazer retrys', () => {
       
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
        .should('exist')
        .type('funciona')
       
        
    });


});