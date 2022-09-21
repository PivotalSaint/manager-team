//const getRole = require('../index')
class Engineer {
    
    constructor (name, id, link, github) {
        this.name = name;
        this.id = id;
        this.link = link;
        this.github= github;
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

        getGithub(){
            return (this.github)
        }
    };

module.exports = Engineer;