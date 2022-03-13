///<reference types="cypress" />

describe('Helpers', () => {
    it('wrap', () => {
        const obj = { nome: 'user', idade: 20}
        expect(obj).to.have.property('nome')
    });

});