const TodoPage = require("./todoPage");

class LoginPage{
    //Elements
    get emailnput(){
        return cy.get('[data-testid="email"]')
    }
    get passwordInput(){
        return cy.get('[data-testid="password"]')
    }
    get submitButton(){
        return cy.get('[data-testid="submit"]')
    }
    //Methods
    load(){
        cy.visit('/');
        return this;
    }
    login(email,password){
        this.emailnput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
        return new TodoPage();
    }

}
module.exports = LoginPage;
