/// <reference types="cypress"/>

import { faker } from "@faker-js/faker"
import loginElements from "../pages/login/login.elements"
import { userElements } from "./user.elements"

class userPage {
    registerUser(data) {
        const name = data.name || faker.person.firstName()
        const number = Math.floor(Math.random() * 9999)
        const email = data.email || faker.internet.email()
        const password = data.password || '123456'
        
        cy.get(userElements.field_name).type(name + number)
        cy.get(loginElements.field_email).type(email)
        cy.get(loginElements.field_password).type(password)
        cy.get(userElements.checkbox_admin).check()
    }
}

export default new userPage()