const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');

test('creates an employee object', ()=>{
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});