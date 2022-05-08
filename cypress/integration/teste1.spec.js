///<reference types="cypress" />

describe('Criando um teste rapido', () => {
    
    it('testes Magalu', () => {

        cy.visit('https://www.magazineluiza.com.br/')
        cy.get('[data-testid="input-search"]').type('armario')
        cy.get('[data-testid="search-submit"]').click()



    });


});