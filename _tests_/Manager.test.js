const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an engineer object', ()=>{
    const manager = new Manager('name', 'id', 'link', 'officeNum');

    expect(manager.name).toBe('Pivotal Saint');
    expect(manager.id).toEqual('69');
    expect(manager.link).toBe('ceo@pivotalsaint.com');
    expect(manager.officeNum).toEqual('420');
});

test('run test to see if we can get the name from Object', ()=>{
    expect(manager.getName()).toBe('Pivotal Saint');
});


test('run test to see if we can get id from object', ()=>{
    expect(manager.getId()).toEqual('69');
});

test('run test to see if we can get link from object', ()=>{
    expect(manager.getLink()).toBe('ceo@pivotalsaint.com');
});

test('run test to see if we can get office number', ()=>{
    expect(manager.getOffice()).toEqual('420');
})