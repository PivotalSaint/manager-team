const Employee = require('../lib/Employee');

test('creates an engineer object', ()=>{
    const engineer = new Employee('name', 'id', 'link');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.link).toBe('link');
});