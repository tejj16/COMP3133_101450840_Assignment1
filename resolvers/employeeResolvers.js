const Employee = require('../models/employee.model'); 

const employeeResolvers = {
  // 3) Get All Employees (Query)
  async getAllEmployees() {
    const employees = await Employee.find();
    return employees;
  },

  // 5) Search Employee By ID (Query)
  async searchEmployeeByEid({ eid }) {
    const employee = await Employee.findById(eid);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  },

  // 8) Search by designation or department (Query)
  async searchEmployeeByDesignationOrDepartment({ designation, department }) {
    const query = {};
    if (designation) {
      query.designation = designation;
    }
    if (department) {
      query.department = department;
    }
    return Employee.find(query);
  },

  // 4) Add New Employee (Mutation)
  async addNewEmployee({
    first_name,
    last_name,
    email,
    gender,
    designation,
    salary,
    date_of_joining,
    department,
    employee_photo,
  }) {
    // Check if an employee with the same email exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      throw new Error('Employee with this email already exists.');
    }

    const newEmployee = new Employee({
      first_name,
      last_name,
      email,
      gender,
      designation,
      salary,
      date_of_joining: new Date(date_of_joining),
      department,
      employee_photo,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const result = await newEmployee.save();
    return result;
  },

  // 6) Update Employee By ID (Mutation)
  async updateEmployeeByEid({
    eid,
    first_name,
    last_name,
    email,
    gender,
    designation,
    salary,
    date_of_joining,
    department,
    employee_photo,
  }) {
    const employee = await Employee.findById(eid);
    if (!employee) {
      throw new Error('Employee not found');
    }

    // Update only if provided
    if (first_name !== undefined) employee.first_name = first_name;
    if (last_name !== undefined) employee.last_name = last_name;
    if (email !== undefined) employee.email = email;
    if (gender !== undefined) employee.gender = gender;
    if (designation !== undefined) employee.designation = designation;
    if (salary !== undefined) employee.salary = salary;
    if (date_of_joining !== undefined) {
      employee.date_of_joining = new Date(date_of_joining);
    }
    if (department !== undefined) employee.department = department;
    if (employee_photo !== undefined) employee.employee_photo = employee_photo;

    employee.updated_at = new Date();
    return employee.save();
  },

  // 7) Delete Employee By ID (Mutation)
  async deleteEmployeeByEid({ eid }) {
    const employee = await Employee.findByIdAndDelete(eid);
    if (!employee) {
      throw new Error('Employee not found or already deleted');
    }
    return 'Employee deleted successfully';
  },
};

module.exports = employeeResolvers;
