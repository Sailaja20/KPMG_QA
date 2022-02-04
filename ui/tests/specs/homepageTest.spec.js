const homepage = require('../../test/homePage')

const chai = require('chai').assert;

    describe('Test Suite - QA sample tests ', () => 
    {     
    it('sample TC1 : Open HomePage and validate it', () => 
    {   
     var homepageTitle = homepage.openHomePage()
     chai.expect(homepageTitle).to.contain("Homepage")

    })  

})