const Employee = require('./Employee')
// import Employee from './Employee' // New Way of require file

class Manager extends Employee {

    constructor(name, id, email, officeNumber, teamInfo) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.teamInfo = teamInfo;
    }

    getTeamInfo(){
        return this.teamInfo
    }

    getOfficeNumber() {
        return this.officeNumber
    }


    getRole() {
        return 'Manager'
    }

    
}

module.exports = Manager;

// const def = new Manager('def', 1, 'def@def.com', 11)

// console.log(def.getOfficeNumber())