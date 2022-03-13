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

});