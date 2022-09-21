const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

test('creates an engineer object', ()=>{
    const engineer = new Employee('name', 'id', 'link', 'github');

    expect(engineer.name).toBe('Pivotal Saint');
    expect(engineer.id).toEqual('69');
    expect(engineer.link).toBe('ceo@pivotalsaint.com');
    expect(engineer.github).toBe('PivotalSaint')
});

test('run test to see if we can get the name from Object', ()=>{
    expect(engineer.getName()).toBe('Pivotal Saint');
});


test('run test to see if we can get id from object', ()=>{
    expect(engineer.getId()).toEqual('69');
});

test('run test to see if we can get link from object', ()=>{
    expect(engineer.getLink()).toBe('ceo@pivotalsaint.com');
});

test('run to see if we can get github', ()=>{
    expect(engineer.getGithub()).toBe('PivotalSaint')
})