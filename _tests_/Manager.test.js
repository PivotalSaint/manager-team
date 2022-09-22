const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an engineer object', ()=>{
    const manager = new Manager('name', 'id', 'link', 'officeNum');

    expect(manager.name).toBe('name');
    expect(manager.id).toEqual('id');
    expect(manager.link).toBe('link');
    expect(manager.officeNum).toEqual('officeNum');
});
