const env_config = require('../constants/env_config')

const formheader = '#factorialform > h1'
const factInput = '#num'
const factBtn = 'button*=Factorial'
const factResult = '#res'
const error = "#errorMsg > strong"


module.exports ={

    openFactorialPage: function() {
     
    browser.url(env_config.factorial_url);
    $(formheader).waitForExist()
    return $(formheader)     
    },

    FactorialInput: function(n) {
    $(factInput).waitForExist()
    $(factInput).setValue(n)      
    },

    factClick: function() {
    $(factBtn).click()
    },

    getfactResult : function(){
    return $(factResult).getText()   
    } ,   

    getErrorMsg : function(){
        return $(error).getText()   
        }  
}