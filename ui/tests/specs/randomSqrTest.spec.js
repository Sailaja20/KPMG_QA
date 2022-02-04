
const randomSquarepage = require('../../test/randomSquare')
const chai = require('chai').assert;

describe('Test Suite - QA Random Square sample tests ', () => 
{  
it('Random Square TC1 : Open Random Square Page and validate', () => 
{   
 var randomSqrTitle = randomSquarepage.openRandomSquarepage()
 chai.expect(randomSqrTitle).to.contain("random square")

}) 


it('Random Square TC2 : Provide Number and calculate Square Power ', () => 
{   
 randomSquarepage.openRandomSquarepage()
 randomSquarepage.randomInput(4)
 randomSquarepage.SquarePowerBtn()
 var result = randomSquarepage.getResult()
 chai.expect(result).to.be.equal(16)

})

it('Random Square TC3 : Provide Number as 0 and calculate Square Power ', () => 
{   
 randomSquarepage.openRandomSquarepage()
 randomSquarepage.randomInput(0)
 randomSquarepage.SquarePowerBtn()
 var result = randomSquarepage.getResult()
 chai.expect(result).to.be.equal(0)

})

it('Random Square TC4 : Provide Number as 1 and calculate Square Power ', () => 
{   
 randomSquarepage.openRandomSquarepage()
 randomSquarepage.randomInput(1)
 randomSquarepage.SquarePowerBtn()
 var result = randomSquarepage.getResult()
 chai.expect(result).to.be.equal(1)

})

})
