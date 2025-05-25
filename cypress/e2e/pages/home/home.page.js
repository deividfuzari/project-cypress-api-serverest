/// <reference types="cypress"/>

import homeElements from "./home.elements";

const nameProduct = 'Logitech MX Vertical'

class homePage {

    clickOnRegisterUser() {
        cy.get(homeElements.btn_registerUser).click()
    }

    clickOnRegisterProduct() {
        cy.get(homeElements.btn_registerProduct).click()
    }

    clickOnHome() {
        cy.get(homeElements.btn_home).click()
    }

    clickOnLogout() {
        cy.get(homeElements.btn_logout).click()
    }

    addProductList() {
        cy.contains('div', nameProduct).find(homeElements.btn_addList).click()
    }
}

export default new homePage()