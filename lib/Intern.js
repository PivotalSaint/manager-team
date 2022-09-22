const Employee = require("./Employee");

//const getRole = require('../index')
class Intern extends Employee{
    
    constructor (name, id, link, school) {
        super(name, id, link)
        this.school = school;
    }

        school(){
            return (this.school);
        }
        choices(){
            return "Intern"
        }
    }; 

module.exports = Intern;