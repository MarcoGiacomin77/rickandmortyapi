describe('Test REST rickandmortyapi.com', () => {
  
context("GET /character", () => {
  it("get filter characters", {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    }, () => {	
    cy.request("GET", "https://rickandmortyapi.com/api/character/?name=Rick&status=Alive&species=Human&type=&gender=Male").then((response) => {
      expect(response.status).to.eq(200)
	  expect(response.duration).to.be.lessThan(1000)
	  let char_num=response.body.results.length
	  let i=0;
	 
	  while (i<char_num)
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
	  expect(response.body.results[i].name).contains('Rick')
	  expect(response.body.results[i].status).contains('Alive')
	  expect(response.body.results[i].species).contains('Human')
	  expect(response.body.results[i].type).contains('')
	  expect(response.body.results[i].gender).contains('Male')
	  
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
})
})
})
})