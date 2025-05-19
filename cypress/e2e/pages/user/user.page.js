/// <reference types="cypress"/>

import { faker } from "@faker-js/faker"
import loginElements from "../login/login.elements"
import { userElements } from "./user.elements"

const email = faker.internet.email()

class userPage {
    registerUser(data) {
        const name = data.name || faker.person.fullName()
        const number = Math.floor(Math.random() * 9999)
        const password = data.password || '123456'
        
        cy.get(userElements.field_name).type(name + number)
        cy.get(loginElements.field_email).type(email)
        cy.get(loginElements.field_password).type(password)
        cy.get(userElements.checkbox_admin).check()
        cy.get(userElements.btn_finalizeRegister).click()
    }

    confirmRegisterUser() {
        cy.contains('h1', 'Lista dos usuários').should('be.visible')
    }

    deleteUser() {
        cy.contains('tr', email).should('be.visible').find(userElements.btn_deleteUser).click()
        cy.contains('tr', email).should('not.exist')
    }
}

export default new userPage()