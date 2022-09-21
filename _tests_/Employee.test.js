const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

test('creates an employee object', ()=>{
    const employee = new Employee('name', 'id', 'link');

    expect(employee.name).toBe('name');
    expect(employee.id).toEqual('id');
    expect(employee.link).toBe('link');
});

test('run test to see if we can get the name from Object', ()=>{
    expect(employee.getName()).toBe('Pivotal Saint');
});


test('run test to see if we can get id from object', ()=>{
    expect(employee.getId()).toEqual('69');
});

test('run test to see if we can get link from object', ()=>{
    expect(employee.getLink()).toBe('ceo@pivotalsaint.com');
});