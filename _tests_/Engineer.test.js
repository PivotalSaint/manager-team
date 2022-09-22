const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test('creates an engineer object', ()=>{
    const engineer = new Engineer('name', 'id', 'link', 'github');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toEqual('id');
    expect(engineer.link).toBe('link');
    expect(engineer.github).toBe('github')
});
