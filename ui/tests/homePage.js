const env_config = require('../constants/env_config')

const homepage = '#root'
const header = "h1=Homepage"


module.exports ={

    openHomePage: function() {
     
        browser.url(env_config.homePage_url);
        $(homepage).waitForExist()
        return $(header).getText()
    },
 


    
}