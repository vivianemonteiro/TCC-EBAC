/// <reference types="cypress" />

describe('Testes da API de Cupons', () => 

  it('Deve listar todos os cupons cadastrados', () => {
    cy.request({
        method: 'GET',
        url: 'http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons ',
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        }
    }).then((response) => {
      cy.log(response)
      expect(response.status).to.equal(200)
 })
}))
