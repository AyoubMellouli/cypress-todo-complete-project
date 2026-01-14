const TodoApi = require('../api/todoApi');
const UserApi = require('../api/userApi');
const TodoPage = require('../pages/todoPage');
describe("todo TCs", ()=> {
    let token;
    beforeEach(()=>{
        UserApi.register().then((response) => {
            token = response.body.access_token
    });
    });
    // it("should be able to add a todo", ()=>{
    // const todoPage = new TodoPage() 
    // const newTodoPage = new NewTodoPage()   
    //     todoPage.load()
    //     todoPage.clickOnAddButton()
    //     newTodoPage.addNewTodo("Learn Cypress")
    //     todoPage.firstItemShouldHaveText("Learn Cypress");
    //     });
    
    it("should be able to add a todo", ()=>{
        new TodoPage() 
        .load()
        .clickOnAddButton()
        .addNewTodo("Learn Cypress")
        .firstItemShouldHaveText("Learn Cypress");
        });    
    it("should be able to mark a todo as completed", ()=>{
        TodoApi.add(token);
        new TodoPage()
        .load()
        .markFirstTodoAsCompleted()
        .firstItemShouldHaveBackground("rgb(33, 76, 97)")
    })
})
