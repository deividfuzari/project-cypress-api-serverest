/// <reference types="cypress"/>

describe('Trabalhando com carrinhos', () => {

    it('Listar carrinhos cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/carrinhos'
        }).then(res => expect(res.status).to.eq(200))
    })

    it('listando carrinho usando query', () => {
        cy.listingCartCreate().then(res => {

            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/carrinhos',
                qs: {
                    _id: res.body._id,
                    precoTotal: res.body.precoTotal,
                    quantidadeTotal: res.body.quantidadeTotal,
                    idUsuario: res.body.idUsuario
                }
            }).then(res => {
                expect(res.status).to.eq(200)
            })
        })
    })

    it('Cadastrar carrinho', () => {

        cy.registerProductId('testeee').then(idProduct => {
            const token = Cypress.env('authToken')
            cy.log(idProduct)
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/carrinhos',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token
                },
                body: {
                    "produtos": [
                        {
                            "idProduto": idProduct,
                            "quantidade": 2
                        }
                    ]
                }
            }).then(res => {
                console.log(res)
                expect(res.body.message).to.eq("Cadastro realizado com sucesso")
            })
        })
    })

    it('Buscar carrinho por ID', () => {
        cy.registerCart().then(res => {
            const idCart = res.body._id

            cy.request({
                method: 'GET',
                url: `https://serverest.dev/carrinhos/${idCart}`
            }).then(res => {
                console.log(res)
                expect(res.status).to.eq(200)
            })
        })
    })

    it('Excluir carrinho', () => {
        cy.registerCart().then(() => {
            const token = Cypress.env('authToken')

            cy.request({
                method: 'DELETE',
                url: 'https://serverest.dev/carrinhos/concluir-compra',
                headers: {
                    authorization: token
                }
            }).then(res => {
                expect(res.body.message).to.eq("Registro excluído com sucesso")
            })
        })
    })

    it('Excluir carrinho e retornar produto para estoque', () => {
        cy.registerCart().then(() => {
            const token = Cypress.env('authToken')

            cy.request({
                method: 'DELETE',
                url: 'https://serverest.dev/carrinhos/cancelar-compra',
                headers: {
                    authorization: token
                }
            }).then(res => {
                expect(res.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido")
            })
        })
    })
})