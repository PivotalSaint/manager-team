class Employee {
    constructor(name = '') {
        this.name = name;
        this.types = ['name', 'id', 'email'];
        this.name = name || this.types.length;

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
};

module.exports = Employee;