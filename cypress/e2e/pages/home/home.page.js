/// <reference types="cypress"/>

import homeElements from "./home.elements";

class homePage {

    clickOnRegisterUser() {
        cy.get(homeElements.btn_registerUser).click()   
    }
}

export default new homePage()