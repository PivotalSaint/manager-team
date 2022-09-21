//const getRole = require('../index')
class Manager {
    
    constructor (name, id, link, officeNum) {
        this.name = name;
        this.id = id;
        this.link = link;
        this.officeNum = officeNum;
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
        getOffice(){
            return (this.officeNum);
        }
    };

module.exports = Manager;