/// <reference types="cypress"/>

import homePage from "../pages/home/home.page"
import loginPage from "../pages/login/login.page"
import productPage from "../pages/product/product.page"
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

    it('Fazer cadastro do produto', () => {
        loginPage.loginAdmin({})
        loginPage.validateSuccsessLogin()
        homePage.clickOnRegisterProduct()
        productPage.registerProduct({})
        productPage.confirmRegisterProduct()
        productPage.deleteProduct()
    })

    it('Cadastrar usuario e produto, depois deslogar', () => {
        loginPage.loginAdmin({})
        loginPage.validateSuccsessLogin()
        homePage.clickOnRegisterUser()
        userPage.registerUser({})
        userPage.confirmRegisterUser()
        userPage.deleteUser()
        homePage.clickOnHome()
        homePage.clickOnRegisterProduct()
        productPage.registerProduct({})
        productPage.confirmRegisterProduct()
        productPage.deleteProduct()
        homePage.clickOnLogout()
        loginPage.validateSuccsessLogout()
    })
})

describe('Fluxo de um usuario normal', () => {

    beforeEach(() => {
        loginPage.accsessUrl()
    })

    it('adicionar um produto no carrinho', () => {
        loginPage.createUserNormal({})
        loginPage.validateCreateUser()
        homePage.addProductList()
        productPage.addingProduct()
        productPage.addingToCart()
        productPage.validateCart()
    })

    it('adicionar um produto na lista e remover do carrinho', () => {
        loginPage.createUserNormal({})
        loginPage.validateCreateUser()
        homePage.addProductList()
        productPage.addingProduct()
        productPage.removeProductList()
        productPage.validateRemoveList()
    })
})