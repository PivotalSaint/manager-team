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
            return (this.id);
        }

        getLink(){
            return (this.link);
        }
        getRole(){
            return "Employee"
        }
    };

module.exports = Employee;