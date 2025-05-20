/// <reference types="cypress"/>

import { faker } from "@faker-js/faker"
import productElements from "./product.elements"
import userElements from "../user/user.elements"

const name = faker.vehicle.vehicle() + Math.floor(Math.random() * 10)

class productPage {

    registerProduct(data) {
        
        const price = data.price || '99999'
        const description = data.description || 'Veiculo'
        const quantity = data.quantity || '99999'
        const file = 'cypress/fixtures/example.json'

        cy.get(productElements.field_nameProduct).type(name)
        cy.get(productElements.field_price).type(price)
        cy.get(productElements.field_description).type(description)
        cy.get(productElements.field_quantity).type(quantity)
        cy.get(productElements.input_file).selectFile(file)
        cy.get(productElements.btn_pageRegister).click()
    }

    confirmRegisterProduct() {
        cy.contains('h1', 'Lista dos Produtos').should('be.visible')
    }

    deleteProduct() {
        cy.contains('tr', name).should('be.visible').find(userElements.btn_deleteUser).click()
        cy.contains('tr', name).should('not.exist')
    }
}

export default new productPage()