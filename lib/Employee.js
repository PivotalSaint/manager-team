//const getRole = require('../index')
class Employee {
    
    constructor (name, id, link) {
        this.name = name;
        this.id = id;
        this.link = link;
    }

        getName() {
            return (this.name);
        }

        getId(){
            return `${this.name}'s ID is ${this.id}`
        }

        getEmail(){
            return `${this.name}'s Email is ${this.link}`
        }

    };

module.exports = Employee;