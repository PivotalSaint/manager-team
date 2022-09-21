const Employee = require('../lib/Employee');

test('creates an engineer object', ()=>{
    const engineer = new Employee('name', 'id', 'link', 'github');

    expect(engineer.name).toBe('Pivotal');
    expect(engineer.id).toBe('69420');
    expect(engineer.link).toBe('ceo@pivotalsaint.com');
    expect(engineer.github).toBe('PivotalSaint')
});