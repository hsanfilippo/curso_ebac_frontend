/// <reference types="cypress" />

describe('Deve incluir um novo contato à agenda', () => {
  it('Deve adicionar uma nova tarefa, e incrementar a quantidade exibida no cabeçalho', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('[type="text"]').type('Henrique Sanfilippo')
    cy.get('[type="email"]').type('henrique@email.com')
    cy.get('[type="tel"]').type('(11) 9 XXXX-XXXX')
    cy.get('.adicionar').click()
  })
})