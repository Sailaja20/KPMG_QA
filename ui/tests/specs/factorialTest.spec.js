
const factorialpage = require('../../test/factorial');
const chai = require('chai').assert;

describe('Test Suite - QA Factorial sample tests ', () => 
{  
it('Factorial TC1 : Open Factorial Page and validate', () => 
{   
 var factorialTitle = factorialpage.openFactorialPage()
 chai.expect(factorialTitle).to.contain("Factorial")

}) 


it('Factorial TC2 : Provide Number and calculate Factorial ', () => 
{   
 factorialpage.openFactorialPage()
 factorialpage.FactorialInput(5)
 factorialpage.factClick()
 var factresult = factorialpage.getfactResult()
 chai.expect(factresult).to.be.equal(120)

})

it('Factorial TC3 : Provide Number as 0 and calculate Factorial ', () => 
{   
 factorialpage.openFactorialPage()
 factorialpage.FactorialInput(0)
 factorialpage.factClick()
 var factresult = factorialpage.getfactResult()
 chai.expect(factresult).to.be.equal(0)

})

it('Factorial TC4 : Provide Number as 1 and calculate Factorial ', () => 
{   
 factorialpage.openFactorialPage()
 factorialpage.FactorialInput(1)
 factorialpage.factClick()
 var factresult = factorialpage.getfactResult()
 chai.expect(factresult).to.be.equal(1)

})

it('Factorial TC5 : Provide Character or special character. It should throw an error ', () => 
{   
 factorialpage.openFactorialPage()
 factorialpage.FactorialInput("a")
 factorialpage.factClick()
 var error = factorialpage.getErrorMsg()
 chai.expect(error).to.be.contains("Invalid Character")

})


it('Factorial TC6 : Provide more than Max number. It should show an error ', () => 
{ var MaxN =10
 factorialpage.openFactorialPage()
 factorialpage.FactorialInput(11) //eg:10 is Maximum 
 factorialpage.factClick()
 var error = factorialpage.getErrorMsg()
 chai.expect(error).to.be.contains(`11 > ${MaxN} is not supported`)

})

})
