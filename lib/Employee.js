class Employee {
    
    constructor (name, id, link) {
        this.name = name;
        this.id = id;
        this.link = link;

    }

        name() {
            return (this.name);
        }

        id(){
            return (this.id);
        }

        link(){
            return (this.link);
        }
        choices(){
            return "Employee"
        }
    };

module.exports = Employee;