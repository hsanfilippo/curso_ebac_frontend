/// <reference types="cypress" />

describe('Deve alterar um contato ja existente na agenda', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
  })

  it('Deve clicar em EDITAR e renderizar os botoes SALVAR e CANCELAR', () => {
    cy.get('.alterar').should('be.visible')
    cy.get('.cancelar').should('be.visible')
  })

  it('Deve sobreescrever os campos com novos dados e salvar corretamente', () => {
    cy.get('[type="text"]').clear().type('Novo Nome da Silva')
    cy.get('[type="email"]').clear().type('novo_email@email.com')
    cy.get('[type="tel"]').clear().type('1191234-5678')
    cy.get('.alterar').click()
  })
})