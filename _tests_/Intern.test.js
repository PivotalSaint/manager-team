const Employee = require('../lib/Employee');

test('creates an intern object', ()=>{
    const intern = new Employee('name', 'id', 'link');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.link).toBe('link');
});