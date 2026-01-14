class TodoApi{
    static add(token){
        cy.request({
            url: "api/v1/tasks",
            method: "POST",
            auth: {
                bearer: token,
            },
            body:{
                isCompleted: false,
                item: "Learn Cypress",
            }
        })
    }
}
module.exports = TodoApi;
