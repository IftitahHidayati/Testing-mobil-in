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
    cy.get('.card-body > .btn').click()
    cy.get('.form-horizontal > :nth-child(2) > div.col-md-12 > .form-control').type('Ertiga 2021-2022')
    cy.get('.form-horizontal > :nth-child(3) > div.col-md-12 > .form-control').type('Suzuki Ertiga 2021 - 2022 ditawarkan dalam 7 varian - mulai Rp 199,40Juta hingga Rp 252,65Juta , varian entry levelnya yaitu 2021 Suzuki Ertiga GA MT Rp 199,40Juta dan varian tertingi Suzuki Ertiga yaitu 2021 Suzuki Ertiga Sport AT ditawarkan dengan harga Rp 252,65Juta.')
    cy.get(':nth-child(1) > div.col-md-12 > .form-control').type('Star 5,.0')
    cy.get('.row > :nth-child(2) > div.col-md-12 > .form-control').type('65000000')
    cy.get('.row > :nth-child(3) > div.col-md-12 > .form-control').attachFile('Avanza.png')
    cy.get('.btn').click()
  })
})