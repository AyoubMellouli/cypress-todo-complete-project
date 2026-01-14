const faker = require('faker');
class UserApi{
    static register(){
        return cy.request({
        url: "api/v1/users/register",
        method : "POST",
        body:{
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: "Test123?",
        },
    })
    }
}
module.exports = UserApi;
