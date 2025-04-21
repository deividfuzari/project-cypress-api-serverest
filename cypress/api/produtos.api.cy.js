/// <reference types="cypress"/>

describe('Trabalhando com Produtos', () => {

    let number = Math.floor(Math.random() * 9999)

    it('Listar produtos cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'
        }).then(res => {
            expect(res.status).to.eq(200)
        })
    })

    it('Listando um Produto usando query', () =>{
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos',
            qs: {
                _id: "BeeJh5lz3k6kSIzA",
                nome: "Logitech MX Vertical",
                quantidade: 376,
                descricao: "Mouse",
                preco: 470
            }
        }).then(res => {
            const nameProduct = res.body.produtos[0].nome
    
            expect(nameProduct).to.eq("Logitech MX Vertical")
        })
    })

    it('Cadastrar um produto', () =>{        
        cy.loginInUserCreate().then(res => {
            const token = res.body.authorization
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/produtos',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token
                },
                body: {
                    "nome": `Macbook air m${number}`,
                    "preco": 6000,
                    "descricao": "computador",
                    "quantidade": 300
                }
            }).then(res => {
                expect(res.body.message).to.eq("Cadastro realizado com sucesso")
            })
        })
    })
})