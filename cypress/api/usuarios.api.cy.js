/// <reference types="cypress"/>

describe('Trabalhando com os Usuarios', () => {

    let user1 = null
    let userIdCreate = null
    let number = Math.floor(Math.random() * 9999)

    beforeEach(()=>{
        cy.listandoUser(0).then(user =>{
            user1 = user
        })
    })

    it('Listando os usuarios', function() {
        cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        }).then(res => {
            expect(res.status).to.eq(200)
        })
    })

    it('listando o primeiro Usuario', function() {

        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            qs: {
                _id: `${user1._id}`,
                nome: user1.nome,
                password: user1.password,
                administrador: user1.administrador,
                email: user1.email
            }
        }).then(res => {
            expect(res.status).to.eq(200)
        })
    })

    it('listando o Usuario desejado com o metodo criado', function() {
        cy.listandoUser(0).then(user => {
            expect(user).to.have.property('nome')
            expect(user).to.have.property('email')
            expect(user).to.have.property('_id')
            expect(user).to.have.property('administrador')
            expect(user).to.have.property('password')
        })
    })

    it('Cadastrar um usuario', () =>{

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Fuzari quality assurance",
                "email": `fuzari${number}@qa.com`,
                "password": "teste",
                "administrador": "true"
            }
        }).then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq("Cadastro realizado com sucesso")
            userIdCreate = res.body._id
            console.log(userIdCreate)
        })
    })

    it('buscar usuario por ID', () => {
        cy.request({
            method: 'GET',
            url : `https://serverest.dev/usuarios/${user1._id}`
        }).then(res => {
            expect(res.status).to.eq(200)
        })
    })

    it('Excluir um usuario', () => {
        cy.createUser('Deivid').then(user =>{
            cy.request({
                method: 'DELETE',
                url: `https://serverest.dev/usuarios/${user.body._id}`
            }).then(res => {
                console.log(res.status)
                expect(res.body.message).to.eq("Registro excluído com sucesso")
            })
        })
    })

    it('Editar um Usuario', () => {
        cy.createUser('userEditado').then(res => {
            cy.request({
                method: 'PUT',
                url: `https://serverest.dev/usuarios/${res.body._id}`,
                body: {  
                    "nome": "Fulano da Silva",
                    "email": `beltrano${number}@qa.com.br`,
                    "password": "teste",
                    "administrador": "true"   
                }
            }).then(res => {
                expect(res.body.message).to.eq("Registro alterado com sucesso")
            })
        })
    })
})
