const Employee = require('./Employee')
// import Employee from './Employee' // New Way of require file

class Manager extends Employee {

    constructor(name, id, email, officeNumber, teamInfo) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.teamInfo = teamInfo;
    }
    getTeamInfo(){ // Display Team Info
        return this.teamInfo
    }
    getOfficeNumber() { // Display Office Number
        return this.officeNumber
    }
    getRole() { // Display Role
        return 'Manager'
    }
}

module.exports = Manager;

