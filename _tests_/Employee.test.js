const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

test('creates an employee object', ()=>{
    const employee = new Employee('name', 'id', 'link');

    expect(employee.name).toBe('name');
    expect(employee.id).toEqual('id');
    expect(employee.link).toBe('link');
});
