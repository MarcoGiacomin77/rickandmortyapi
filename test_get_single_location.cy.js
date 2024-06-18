describe('Test REST rickandmortyapi.com', () => {
  
context("GET /location", () => {
  it("get single location",  {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    },() => {
	for (let i=1; i<127; i++) {
		
    cy.request("GET", "https://rickandmortyapi.com/api/location/" + i).then((response) => {
      expect(response.status).to.eq(200)
	  expect(response.duration).to.be.lessThan(1000)
	  //expect(response.body.results).length.to.be.greaterThan(1)
      expect(response.body).to.have.property('name')
	  expect(response.body).to.have.property('type')
	  expect(response.body).to.have.property('dimension')
	  expect(response.body).to.have.property('residents')
	  expect(response.body).to.have.property('url')
	  expect(response.body).to.have.property('created')
	  cy.log(response)
    })
}
  })
})
})