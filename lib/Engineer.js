const Employee = require('./Employee')


class Engineer extends Employee {

    constructor(name, id, email, gitHubAccount) {
        super(name, id, email);
        this.gitHubAccount = gitHubAccount;
    }

    getGitHubAccount() {
        return this.gitHubAccount
    }
    getRole() {
        return 'Engineer'
    }
}


module.exports = Engineer;