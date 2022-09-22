const Employee = require("./Employee");

//const getRole = require('../index')
class Manager extends Employee{
    
    constructor (name, id, link, officeNum) {
        super(name, id, link)
        this.officeNum = officeNum;
    }

        officeNum(){
            return (this.officeNum);
        }
        choices(){
            return "Manager"
        }
    };

module.exports = Manager;