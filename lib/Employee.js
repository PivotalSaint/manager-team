class Employee {
    constructor(name, id, email) {
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
    };

module.exports = Employee;