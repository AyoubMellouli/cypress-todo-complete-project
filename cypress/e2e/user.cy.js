/// <reference types="cypress" />
const LoginPage = require("../pages/loginPage");
const TodoPage = require("../pages/todoPage");
 
it("should be able to login", ()=>{
    new LoginPage()
        .load()
        .login("mellouli22ayoub@gmail.com","Test123?")
        .welcomeMshShouldBeVisible();
});