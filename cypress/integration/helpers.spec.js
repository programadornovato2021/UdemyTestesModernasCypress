///<reference types="cypress" />

describe('Helpers', () => {
    it('wrap', () => {
        const obj = { nome: 'user', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

         cy.visit('https://wcaquino.me/cypress/componentes.html')
        
         const promise = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                 resolve(10)
 
            }, 500)
 
          })

        
    });

    it('Its...', () => {
        const obj = { nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')
        
    });



    it('Invoke.....', () => {
        const getValue = () => 1;
        const soma = (a,b) => a + b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({ fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.window().invoke('alert', 'Da pra ver?')
        cy.get('#resultado')
        .invoke('html', '<imput type = "button", value="hacked"/>')

    });
});


