const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', ()=>{
    const intern = new Intern('name', 'id', 'link', 'school');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.link).toBe('link');
    expect(intern.school).toBe('school');
});
