describe('Test REST rickandmortyapi.com', () => {
  
context("GET /character", () => {
  it("get single character", {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    }, () => {
	for (let i=1; i<827; i++) {
		
    cy.request("GET", "https://rickandmortyapi.com/api/character/" + i).then((response) => {
      expect(response.status).to.eq(200)
	  expect(response.duration).to.be.lessThan(1000)
	  //expect(response.body.results).length.to.be.greaterThan(1)
      expect(response.body).to.have.property('name')
      expect(response.body).to.have.property('status')
	  expect(response.body).to.have.property('species')
	  expect(response.body).to.have.property('type')
	  expect(response.body).to.have.property('gender')
	  expect(response.body).to.have.property('origin')
	  expect(response.body).to.have.property('location')
	  expect(response.body).to.have.property('image')
	  expect(response.body).to.have.property('episode')
	  expect(response.body).to.have.property('url')
	  expect(response.body).to.have.property('created') 
	  cy.log(response)
    })
}
  })
})
})