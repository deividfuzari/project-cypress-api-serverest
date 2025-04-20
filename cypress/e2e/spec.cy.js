/// <reference types="cypress"/>

describe('fazer login do serveRest Api', () => {

  it('fazendo o login do serveRest Api', () => {
    cy.request({
      method: "POST",
      url: "https://serverest.dev/login",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).then(res => {
      cy.log(res.body.message)
      cy.log(res.body.authorization)
      const token = res.body.authorization
      console.log(token)
    })
  })

  it('Listando os usuarios', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
    })
  })
})