# go to project directory
# use "npm install" to install npm packages and libraries.
# hit on http://localhost:3000 for HomePage
# then run these API's as per the instructions.

Welcome Page : 
  method : "GET"
  url : http://localhost:3000/fg/welcome


Selected Menu :
  method : "POST"
  url : http://localhost:3000/fg/menu
  body : {
  	"Digits" : 1 | 2 | 3 | 0 (ActionType for Digits).
  }
  actionType for Digits : 1 for Sales Department, 2 for Technical Support, 3 for Financial Services, 0 for Help.


Sales Department :
  method : "POST"
  url : http://localhost:3000/fg/salesDept
  body : {
  	"Digits" : 2 | 9 (ActionType for Digits).
  }
  actionType for Digits : 2 to get sales details and 9 to talk to our customer care executive of sales.


Technical Support :
  method : "POST"
  url : http://localhost:3000/fg/techSupport
  body : {
  	"Digits" : 2 | 9 (ActionType for Digits).
  }
  actionType for Digits : 2 to get farm related best technical solutions and 9 to talk to our customer care executive of technical support.


Financial Department :
  method : "POST"
  url : http://localhost:3000/fg/finance
  body : {
  	"Digits" : 2 | 9 (ActionType for Digits).
  }
  actionType for Digits : 2 to get your financial statement and  9 to talk to our customer care executive of financial support


Help :
  method : "POST"
  url : http://localhost:3000/fg/help
  body : {
  	"Digits" : 9 (ActionType for Digits).
  }
  actionType for Digits : 9 to talk to our customer care executive of financial support