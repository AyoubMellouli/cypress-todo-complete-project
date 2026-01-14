const TodoPage = require("./todoPage");

class NewTodoPage{
    get newTodo(){
        return cy.get('[data-testid="new-todo"]')
    }
    get submitNewTodoButton (){
        return cy.get('[data-testid="submit-newTask"]')
    }
    load(){
        cy.visit("/todo/new");
        return this ; 
    }
    addNewTodo(item){
        this.newTodo.type(item)
        this.submitNewTodoButton.click()
        const TodoPage = require("./todoPage");
        return new TodoPage();
    }
}
module.exports = NewTodoPage;
