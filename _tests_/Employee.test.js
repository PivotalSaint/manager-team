const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

test('creates an employee object', ()=>{
    const employee = new Employee('name', 'id', 'link');

    expect(employee.name).toBe('Pivotal Saint');
    expect(employee.id).toBe('69');
    expect(employee.link).toBe('ceo@pivotalsaint.com');
});

test('run test to see if we can get the name from Object', ()=>{
    expect(employee.getName()).toBe('Pivotal Saint');
});

