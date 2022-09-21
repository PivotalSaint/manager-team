const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

test('creates an employee object', ()=>{
    const employee = new Employee('employee', 'name', 'id', 'link');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.link).toBe('link');
});