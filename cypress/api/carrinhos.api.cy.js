/// <reference types="cypress"/>

describe('Trabalhando com carrinhos', () => {

    it('Listar carrinhos cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/carrinhos'
        }).then(res => expect(res.status).to.eq(200))
    })

    it('listando carrinho usando query', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/carrinhos',
            qs: {
                precoTotal: 500,
                quantidadeTotal: 5,
                idUsuario: "ftIVNnGSuwHDP6e3",
                _id:  "w1TLahlabr2HYSKp"
            }
        }).then(res => {
            console.log(res)
            const idFirstProduct = res.body.carrinhos[0].produtos[0].idProduto
            // const idSecondProduct = res.body.carrinhos[0].produtos[1].idProduto

            expect(idFirstProduct).to.eq("J7nm2LKH3WnMkkzz")
            // expect(idSecondProduct).to.eq("K6leHdftCeOJj8BJ")
        })
    })

    it('Cadastrar carrinho', ()=> {
        
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

    it('Buscar carrinho por ID', ()=> {
        cy.registerCart().then(res =>{
            const idCart = res.body._id

            cy.request({
                method: 'GET',
                url: `https://serverest.dev/carrinhos/${idCart}`
            }).then(res => {
                expect(res.status).to.eq(200)
            })
        })
    })
})