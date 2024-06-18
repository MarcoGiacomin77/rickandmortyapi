describe('Test REST rickandmortyapi.com', () => {
  
context("GET /character", () => {
  it("get multiple characters", {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    }, () => {
	let datalist = [1,2,3]
	let char_num=datalist.length
    cy.request("GET", "https://rickandmortyapi.com/api/character/" + datalist).then((response) => {
      expect(response.status).to.eq(200)
	  expect(response.duration).to.be.lessThan(1000)
	  //expect(response.body.results).length.to.be.greaterThan(1)
	  
	  let i=0
	  while (i < char_num)
{	
	  expect(response.body[i]).to.have.property('name')
      expect(response.body[i]).to.have.property('status')
	  expect(response.body[i]).to.have.property('species')
	  expect(response.body[i]).to.have.property('type')
	  expect(response.body[i]).to.have.property('gender')
	  expect(response.body[i]).to.have.property('origin')
	  expect(response.body[i]).to.have.property('location')
	  expect(response.body[i]).to.have.property('image')
	  expect(response.body[i]).to.have.property('episode')
	  expect(response.body[i]).to.have.property('url')
	  expect(response.body[i]).to.have.property('created')

	if (expect(response.body[i].id).to.exist)
		{
	              i++
		}
	else 
		{
			      i=0
				  break 
		}	
    



	 // expect(response.body.results[2].created).to.eq('')	
}	
})
})
})
})