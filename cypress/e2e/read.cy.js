describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('.me-1 > .btn').click()
    cy.get('#form2Example18').type('admin@carin.com')
    cy.get('#form2Example28').type('admin')
    cy.get('.btn').click()
    cy.get(':nth-child(7) > .sidebar-link > .mdi').click()
  })
})