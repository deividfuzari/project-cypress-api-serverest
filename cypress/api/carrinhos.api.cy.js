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
                precoTotal: 6180,
                quantidadeTotal: 3,
                idUsuario: "0uxuPY0cbmQhpEz1",
                _id:  "qbMqntef4iTOwWfg"
            }
        }).then(res => {
            const idFirstProduct = res.body.carrinhos[0].produtos[0].idProduto
            const idSecondProduct = res.body.carrinhos[0].produtos[1].idProduto

            expect(idFirstProduct).to.eq("BeeJh5lz3k6kSIzA")
            expect(idSecondProduct).to.eq("K6leHdftCeOJj8BJ")
        })
    })
})