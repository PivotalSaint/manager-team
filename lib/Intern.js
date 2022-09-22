const Employee = require("./Employee");

//const getRole = require('../index')
class Intern extends Employee{
    
    constructor (name, id, link, school) {
        super(name, id, link)
        this.school = school;
    }

        getSchool(){
            return (this.school);
        }
        getRole(){
            return "Intern"
        }
    };

module.exports = Intern;