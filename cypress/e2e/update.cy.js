import 'cypress-file-upload';
import { Input } from "postcss"
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('.me-1 > .btn').click()
    cy.get('#form2Example18').type('admin@carin.com')
    cy.get('#form2Example28').type('admin')
    cy.get('.btn').click()
    cy.get(':nth-child(5) > .sidebar-link > .mdi').click()
    cy.get(':nth-child(8) > :nth-child(8) > form > .btn-info').click()
    cy.get('.row > :nth-child(3) > div.col-md-12 > .form-control').attachFile('Honda-Brio.jpg')
    cy.get('.btn').click()
  })
})