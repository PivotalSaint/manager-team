//const getRole = require('../index')
class Intern {
    
    constructor (name, id, link, school) {
        this.name = name;
        this.id = id;
        this.link = link;
        this.school = school;
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
        
        getSchool(){
            return (this.school);
        }
    };

module.exports = Intern;