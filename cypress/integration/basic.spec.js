///<reference types="cypress" />

describe('Cypress basics', () => {

    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        //const title = cy.title()
        //console.log(title)

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')


            //TODO imprimir o log no console
            //TODO escrever o log em um camo de teste

    });
    
    it('Should find and interact with an element', () => {
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
    });
});

// debug para descobrir mais informacoes no console de um elemento
// cy.pause() para para o teste 