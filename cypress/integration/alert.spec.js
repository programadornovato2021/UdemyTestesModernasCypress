///<reference types="cypress" />

describe('Work with alerts', () => {
    

    before(() => {
        cy.reload
    });

    beforeEach(() => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        
    });
     it('Alert', () => {
         cy.get('#alert').click()
         cy.on('window:alert', msg =>{
             console.log(msg)
             expect(msg).to.be.equal('Alert Simples')
         })
     });
})