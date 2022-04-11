///<reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsContas'

describe('Should test at a functional level', () => {
    

    before(() => {
        cy.login('programador21@gmail.com', 'maluco123')
        cy.resetApp()
        //cy.visit('https://barrigareact.wcaquino.me/')
        //cy.get(loc.LOGIN.USER).type('programador21@gmail.com')
        //cy.get(loc.LOGIN.PASSOWORD).type('maluco123')
        //cy.get(loc.LOGIN.BTN_LOGIN).click()
        //cy.get(loc.MESSAGE).should('contain',('Bem vindo'))
    });

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        //cy.get(loc.MENU.SETTINGS).click()
        //cy.get(loc.MENU.CONTAS).click()
        //cy.get(loc.CONTAS.NOME).type('Conta de teste')
        //cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    });
   
    it('Should update an account', () => {
        cy.get(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
        .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')

    });
})