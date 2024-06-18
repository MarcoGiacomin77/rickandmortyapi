describe('Test REST rickandmortyapi.com', () => {
  
context("GET /character", () => {
  it("get all characters", {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    }, () => {
	
	let page_num=10
	for(let f=1;f<page_num;f++)
	{	
    cy.request("GET", "https://rickandmortyapi.com/api/character/?page=" + f).then((response) => {
      expect(response.status).to.eq(200)
	  expect(response.duration).to.be.lessThan(1000)
	  //expect(response.body.results).length.to.be.greaterThan(1)
	  let char_num=826
	  let i=1
	  while (i < char_num)
{	
	  expect(response.body.results[i]).to.have.property('name')
      expect(response.body.results[i]).to.have.property('status')
	  expect(response.body.results[i]).to.have.property('species')
	  expect(response.body.results[i]).to.have.property('type')
	  expect(response.body.results[i]).to.have.property('gender')
	  expect(response.body.results[i]).to.have.property('origin')
	  expect(response.body.results[i]).to.have.property('location')
	  expect(response.body.results[i]).to.have.property('image')
	  expect(response.body.results[i]).to.have.property('episode')
	  expect(response.body.results[i]).to.have.property('url')
	  expect(response.body.results[i]).to.have.property('created')

	if (expect(response.body.results[i].id).to.exist)
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
f++
})
}
})
})
})