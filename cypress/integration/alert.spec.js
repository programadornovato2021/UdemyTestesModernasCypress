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

     it('Alert com mock', () => {
         const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
        
    });
    it('confirm', () => {
        
        cy.on('window:confirm Simples', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('confirm Simples')
        })
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })

        cy.get('#confirm').click()
    });
    
    it('Prompt', () => {
        
            cy.window().then(win =>{
                cy.stub(win,'prompt').returns('42')
            })
            
        cy.on('window:confirm', msg =>{
       
        expect(msg).to.be.equal('Era 42?')
        })
        
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
    });

})