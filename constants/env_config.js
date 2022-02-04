module.exports = { 
    admintest: "admin@kpmg.com.au",
    password : "kpmg@123.",
  
    TEST_URL : "http://localhost", //it can be configured as dynamic value
  
    homePage_url : JSON.parse(process.env.TEST_URL).toString(),
    factorial_url : JSON.parse(process.env.TEST_URL).toString() + '/factorial',
    fibonacci_url : JSON.parse(process.env.TEST_URL).toString() + '/fibonacci',
    randomSquare_url : JSON.parse(process.env.TEST_URL).toString() + '/randomsquare',

}