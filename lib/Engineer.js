const Employee = require("./Employee");

//const getRole = require('../index')
class Engineer extends Employee {
    
    constructor (name, id, link, github) {
        super(name, id, link);
        this.github= github;
    }

        github(){
            return (this.github)
        }
        choices(){
            return "Engineer"
        }
    };

module.exports = Engineer;