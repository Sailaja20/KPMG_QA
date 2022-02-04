const env_config = require('../constants/env_config')

const formheader = '#fibonacciform > h1'
const fibInput = '#num'
const fibBtn = 'button*=Fibonacci'
const fibResult = '#fibResultId'
const error = "#errorMsg > strong"



module.exports ={

    openFibonacciPage: function() {
     
    browser.url(env_config.fibonacci_url);
    $(formheader).waitForExist()
    return $(formheader)     
    },

    FibInputFn: function(n) {
    $(fibInput).waitForExist()
    $(fibInput).setValue(n)      
    },

    fibClick: function() {
    $(fibBtn).click()
    },

    getfibSeries : function(){
    return $(fibResult).getText()   
    },   
    getErrorMsg : function(){
        return $(error).getText()   
    }  
}