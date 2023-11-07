/// <reference types="cypress" />

import compraPage from "../support/page_objects/compra.page";
const produtos = require('../fixtures/produtos.json')
const perfil = require('../fixtures/user.json')

describe('Funcionalidade adicionar item ao carrinho - Fluxo de pedido', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  })

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    compraPage.selecionarProdutos(produtos[0].produto, produtos[0].tamanho, produtos[0].cor, produtos[0].quantidade)
    compraPage.selecionarProdutos(produtos[1].produto, produtos[1].tamanho, produtos[1].cor, produtos[1].quantidade)
    compraPage.selecionarProdutos(produtos[2].produto, produtos[2].tamanho, produtos[2].cor, produtos[2].quantidade)
    compraPage.finalizarCompra(perfil.usuario, perfil.senha)    
    compraPage.validarPedido(produtos[0].produto, produtos[0].tamanho, produtos[0].cor)
    compraPage.validarPedido(produtos[1].produto, produtos[1].tamanho, produtos[1].cor)
    compraPage.validarPedido(produtos[2].produto, produtos[2].tamanho, produtos[2].cor)
  })
})
