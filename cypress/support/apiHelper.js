export class ApiHelper {

    static getToken(email, password) {
        return cy.request({
            method: "POST",
            url: "http://5.189.186.217/api/auth/login",
            body: {
                email,
                password
            }
        }
          ).then(res => {
            return res.body.token;
          });
    }

    static getVacansyById(id) {
        return cy.request("GET", `/web/index.php/api/v2/recruitment/vacancies/${id}`);
    }

    static getCategories() {
        return this.getToken().then(token => {
            return cy.request({
                method: "GET",
                url: "http://5.189.186.217/api/category",
                headers: {
                    "Authorization": token
                }
            }).its("body").then(body => {
                return body;
            })
        })
    }

    static getCategories2(token) {
            return cy.request({
                method: "GET",
                url: "http://5.189.186.217/api/category",
                headers: {
                    "Authorization": token
                }
            }).its("body").then(body => {
                return body;
            })
    }

}