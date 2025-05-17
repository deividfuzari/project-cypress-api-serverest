/// <reference types="cypress"/>

import homeElements from "../home/home.elements";
import loginElements from "./login.elements";

const messageAdmin = 'Este é seu sistema para administrar seu ecommerce.'

class loginPage {

    accsessUrl() {
        cy.visit('https://front.serverest.dev')
        cy.viewport(1440,900)
    }

    loginAdmin(data) {
        const email = data.email || 'teste2@hotmail.com'
        const password = data.password || '123456'

        cy.get(loginElements.field_email).type(email)
        cy.get(loginElements.field_password).type(password)
        cy.get(loginElements.btn_enter).click()
    }

    validateSuccsessLogin () {
        cy.contains(homeElements.message_admin, messageAdmin ).should('be.visible')
    }

}

export default new loginPage()