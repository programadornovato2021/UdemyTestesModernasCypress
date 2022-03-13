///<reference types="cypress" />

describe('work with iframes', () => {

    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
            .type('Funciona?')
            .should('have.value', 'Funciona?')

            cy.on('window:alert', msg =>{
                expect(msg).to.be.equal('Alert Simples')
            })
            cy.wrap(body).find('#otherButton').click()
        })

        
        
    });
})