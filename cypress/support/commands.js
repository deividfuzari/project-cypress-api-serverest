// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//listando usuario por index

Cypress.Commands.add('listandoUser', (user) =>{
    cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
    }).then(res => {
        const usuarios = res.body.usuarios[user]
        return cy.wrap(usuarios)
    })
})

let emaill
let passwordd

Cypress.Commands.add('createUser', (nome) =>{
    let number = Math.floor(Math.random() * 9999)
    const email = `${nome}${number}@qa.com.br`
    const password = "teste"

    emaill = email
    passwordd = password

    Cypress.env('userEmail', email)
    Cypress.env('userPassword', password)

    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": "true"
        }
    })
})

Cypress.Commands.add('loginInUserCreate', () => {
    cy.createUser('Fuzarii').then(() => {

        const email = Cypress.env('userEmail')
        const password = Cypress.env('userPassword')
        console.log(email)
        console.log(password)
        console.log(emaill)
        console.log(passwordd)

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": email,
                "password": password
            }
        })
    })
})