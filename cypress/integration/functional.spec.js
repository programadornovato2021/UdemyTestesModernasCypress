///<reference types="cypress" />

describe('Should test at a functional level', () => {
    

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('programador21@gmail.com')
        cy.get('[data-test="passwd"]').type('maluco123')
        cy.get('.btn').click()
        cy.get('.toast').should('contain',('Bem vindo'))
    });

    it('Should create an account', () => {
        
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta de teste')
        cy.get('.btn').click()
        cy.get('.toast-success').should('contain', 'Conta inserida com sucesso')
    });
   
    it('Should update an account', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .fa-edit').click()
        cy.get('.btn > .far').click()
        .type('Conta alterada')
        cy.get('.btn').click()
        cy.get('.toast-success').should('contain', 'Conta atualizada com sucesso')

    });
})