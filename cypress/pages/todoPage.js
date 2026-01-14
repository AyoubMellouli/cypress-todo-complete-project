const LoginPage = require("./loginPage");
const NewTodoPage = require("./newTodoPage");

class TodoPage {
    get welcomeMsg(){
        return cy.get('[data-testid="welcome"]')
    }
    get addButton(){
        return cy.get('[data-testid="add"]')
    }
    
    get firstTodoItem (){
        return cy.get('[data-testid="todo-item"]').eq(0)
    }
    get firstTodoCheckBox (){
        return cy.get('[data-testid="complete-task"]').eq(0)
    }
    load(){
        cy.visit("/todo");
        return this;
    }
    clickOnAddButton(){
        this.addButton.click();
        return new NewTodoPage();
    }
    welcomeMshShouldBeVisible(){
         this.welcomeMsg.should('be.visible')
         return this;
    }
    firstItemShouldHaveText(text){
        this.firstTodoItem.should('have.text', text)
        return this;
    }
    markFirstTodoAsCompleted(){
        this.firstTodoCheckBox.click()
        return this;
    }
    firstItemShouldHaveBackground(color){
        this.firstTodoItem.should('have.css','background-color', color)
        return this;
    }
}
module.exports = TodoPage;
