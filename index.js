const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptUser = () => {
    return inquirer.prompt([
        //    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        {
            type: 'input',
            name: 'name',
            message: 'What is the team Manager name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name for manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your team member ID (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the email to the Manager. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter office Phone Number',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter office phone number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: '',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            },

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide information!');
                    return false;
                }
            }
        }
    ])

};

// added this mod 9.3.5
const promptProject = portfolioData => {
    // if there's no 'projects' array property, create one
    console.log(`
=====================
Add a New Team Member
=====================
`);

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your team member?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide name of team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your team member ID (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide id number!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What position does this member have? (Check one)',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'position',
            message: 'Enter Team member information for: Intern (enter) School Name/for: Engineer (enter) Github Name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide Intern-School Name/ Engineer- Github Name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the email to your employee. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide email!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to add this team member?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
