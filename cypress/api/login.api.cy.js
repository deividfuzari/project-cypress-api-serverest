/// <reference types="cypress"/>

describe('fazer login do serveRest Api', () => {

    it('fazendo o login do ServeRest API', () => {
        cy.request({
            method: "POST",
            url: "https://serverest.dev/login",
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              },
              failOnStatusCode: false
              
        }).then(res => {
            cy.log(res.body.message)
            cy.log(res.body.authorization)
            const token = res.body.authorization
            console.log(token)
            expect(res.body.message).to.eq("Email e/ou senha inválidos")
        })
    })
})