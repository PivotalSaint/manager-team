//const getRole = require('../index')
class Employee {
    
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

        getName() {
            if (this.name === 'name') {
                return true;
            }
        }

        getId(){
            return `${this.name}'s ID is ${this.id}`
        }

        getEmail(){
            return `${this.name}'s Email is ${this.email}`
        }

        //getRole() Returns 'Employee'
        // add coding here to be imported from index.js
    };

module.exports = Employee;