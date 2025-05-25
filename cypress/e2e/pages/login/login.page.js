/// <reference types="cypress"/>

import homeElements from "../home/home.elements";
import userElements from "../user/user.elements";
import loginElements from "./login.elements";
import { faker } from "@faker-js/faker";

const messageAdmin = 'Este é seu sistema para administrar seu ecommerce.'
const login = 'Login'
const homeMessage = 'Serverest Store'

class loginPage {

    accsessUrl() {
        cy.visit('https://front.serverest.dev')
        cy.viewport(1440, 900)
    }

    loginAdmin(data) {
        const email = data.email || 'fulano@qa.com'
        const password = data.password || 'teste'

        cy.get(loginElements.field_email).type(email)
        cy.get(loginElements.field_password).type(password)
        cy.get(loginElements.btn_enter).click()
    }

    createUserNormal(data) {
        const name = data.name || faker.person.fullName()
        const number = Math.floor(Math.random() * 9999)
        const password = data.password || '123456'
        const email = faker.internet.email()

        cy.get(loginElements.btn_register).click()
        cy.get(userElements.field_name).type(name + number)
        cy.get(loginElements.field_email).type(email)
        cy.get(loginElements.field_password).type(password)
        cy.get(userElements.btn_loginRegister).click()
    }

    validateSuccsessLogin() {
        cy.contains(homeElements.message_admin, messageAdmin).should('be.visible')
    }

    validateSuccsessLogout() {
        cy.contains(loginElements.message_login, login).should('be.visible')
    }

    validateCreateUser() {
        cy.contains('h1', homeMessage).should('be.visible')
    }

}

export default new loginPage()