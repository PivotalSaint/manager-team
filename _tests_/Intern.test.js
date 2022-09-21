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

test('run test to see if we can get the name from Object', ()=>{
    expect(intern.getName()).toBe('Pivotal Saint');
});


test('run test to see if we can get id from object', ()=>{
    expect(intern.getId()).toEqual('69');
});

test('run test to see if we can get link from object', ()=>{
    expect(intern.getLink()).toBe('ceo@pivotalsaint.com');
});

test('see if we can get school', ()=>{
    expect(intern.getSchool()).toBe('codingBootCamp');
});