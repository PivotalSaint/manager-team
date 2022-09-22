const Employee = require("./Employee");

//const getRole = require('../index')
class Engineer extends Employee {
    
    constructor (name, id, link, github) {
        super(name, id, link);
        this.github= github;
    }

        getGithub(){
            return (this.github)
        }
        getRole(){
            return "Engineer"
        }
    };

module.exports = Engineer;