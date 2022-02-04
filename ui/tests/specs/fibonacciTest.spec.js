const fibonaccipage = require('../../test/fibonacci');
const chai = require('chai').assert;

describe('Test Suite - QA Fibonaccisample tests ', () => 
{  
it('Fibonacci TC1 : Open Fibonacci Page and validate', () => 
{   
 var fibTitle = fibonaccipage.openFibonacciPage()
 chai.expect(fibTitle).to.contain("Fibonacci")

}) 


it('Fibonacci TC2 : Provide Number and calculate Fibonacci Series ', () => 
{   
 fibonaccipage.openFibonacciPage()
 fibonaccipage.FibInputFn(4)
 fibonaccipage.fibClick()
 var fibresult = fibonaccipage.getfibResult()
 chai.expect(fibresult).to.be.equal("0 1 1 2")

})

it('Fibonacci TC3 : Provide Number as 0 and calculate Fibonacci ', () => 
{   
 fibonaccipage.openFibonacciPage()
 fibonaccipage.FibInputFn(0)
 fibonaccipage.fibClick()
 var fibresult = fibonaccipage.getfibResult()
 chai.expect(fibresult).to.be.equal(0)

})

it('sample TC4 : Provide Number as 1 and calculate Fibonacci ', () => 
{   
 fibonaccipage.openFibonacciPage()
 fibonaccipage.FibInputFn(1)
 fibonaccipage.fibClick()
 var fibresult = fibonaccipage.getfibResult(1)
 chai.expect(fibresult).to.be.equal(1)

})

it('sample TC5 : Provide Number more than Max number, It should show an error', () => 
{ var MaxN =10 
 fibonaccipage.openFibonacciPage()
 fibonaccipage.FibInputFn(11)
 fibonaccipage.fibClick()
 var fibresult = fibonaccipage.getfibResult(1)
 chai.expect(fibresult).to.contains(`11 > ${MaxN} is not supported`)

})

})

