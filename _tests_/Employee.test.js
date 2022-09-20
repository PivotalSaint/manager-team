const Employee = require('./lib/Employee.js');

test('creates an employee object', ()=>{
    const employee = new Employee();

    expect(employee.name).toBe(getName());
    expect(employee.id).toBe(getId());
    expect(employee.email).toBe(getEmail());
});