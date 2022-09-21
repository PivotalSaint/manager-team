const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

test('creates an engineer object', ()=>{
    const manager = new Employee('name', 'id', 'link', );

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.link).toBe('link');
});