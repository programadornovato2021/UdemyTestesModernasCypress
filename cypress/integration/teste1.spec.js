

describe('Criando um teste rapido', () => {
    
    it('testes Magalu', () => {

        cy.visit('https://www.magazineluiza.com.br/')
        cy.get('[data-testid="input-search"]').type('armario')
        cy.get('[data-testid="search-submit"]').click()
        cy.get(':nth-child(5) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]').click()
        



    });


});