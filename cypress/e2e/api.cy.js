/// <reference types="cypress" />

describe('API', () => {

  it('Get All Products List', () => {
    cy.request({
      url:'https://automationexercise.com/api/productsList',
      method: 'GET'
    }).then((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body).to.contain('products')
      expect(response.body).to.contain('id')
      const ajusteJson = JSON.parse(response.body)
      expect(ajusteJson.products.length).to.have.greaterThan(1)

    })


  })

  it('POST To All Products List', () => {
    cy.request({
      method: "POST",
      url: 'https://automationexercise.com/api/productsList'
    }).then((response) =>{
      const data = JSON.parse(response.body)
      expect(data.responseCode).to.eq(405)
      expect(data.message).to.eq('This request method is not supported.')


    })

  })

  it('Get All Brands List', () => {
    cy.request({
      method: "GET",
      url: 'https://automationexercise.com/api/brandsList'

    }).then((response) =>{
        const data = JSON.parse(response.body)
        expect(data.brands).to.exist
        expect(response.status).to.eq(200)
        expect(data.brands).to.deep.include({ id: 1, brand: "Polo" })
      })

  })

})