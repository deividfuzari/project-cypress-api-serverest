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
            const token = res.body.authorization
            console.log(token)
            expect(res.body.message).to.eq("Login realizado com sucesso")
        })
    })
})