/// <reference types="cypress"/>

import homePage from "../pages/home/home.page"
import loginPage from "../pages/login/login.page"
import userPage from "../pages/user/user.page"



describe('Fluxo do usuario de admin', () => {

    beforeEach(() => {
        loginPage.accsessUrl()
    }) 

    it('fazer cadastro de usuario', () => {
        loginPage.loginAdmin({})
        loginPage.validateSuccsessLogin()
        homePage.clickOnRegisterUser()
        userPage.registerUser({})
        userPage.confirmRegisterUser()
        userPage.deleteUser()
    })
})