const locators = {

    LOGIN: {
        USER: '[data-test="email"]',
        PASSOWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },

    MENU:{
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[href="/contas"]',
    },
    CONTAS:{
        NOME: '[data-test="nome"]',
        BTN_SALVAR:'.btn',

        XP_BTN_ALTERAR: ':nth-child(2) > :nth-child(2) > .fa-edit'
    },



    MESSAGE: '.toast',


}

export default locators;