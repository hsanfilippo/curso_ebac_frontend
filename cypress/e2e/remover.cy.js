/// <reference types="cypress" />

describe('Testando a remoção de um contato da agenda', () => {
  it('Deve remover um contato da agenda ao clicar em DELETAR', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
  })
})