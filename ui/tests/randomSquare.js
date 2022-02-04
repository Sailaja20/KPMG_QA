const env_config = require('../constants/env_config')

const formheader = 'h1*=random square'
const randomInput = '#num'
const SquarePowerBtn = 'button*=randomsquare'
const squareResult = '#res'


module.exports ={

    openRandomSquarepage: function() {
     
    browser.url(env_config.randomSquare_url);
    $(formheader).waitForExist()
    return $(formheader)     
    },

    randomInput: function(n) {
    $(randomInput).waitForExist()
    $(randomInput).setValue(n)      
    },

    randomClick: function() {
    $(SquarePowerBtn).click()
    },

    getResult : function(){
    return $(squareResult).getText()   
    }    
}