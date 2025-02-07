const { buildSchema } = require('graphql');

const schema = buildSchema(`
  "User type represents a user in the system."
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    created_at: String
    updated_at: String
  }

  "Employee type represents an employee record."
  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
    created_at: String
    updated_at: String
  }

  "Custom type to return on login with a token."
  type LoginResponse {
    message: String!
    token: String
    user: User
  }

  "The root Query type."
  type Query {
    "2) Login Query"
    login(usernameOrEmail: String!, password: String!): LoginResponse!

    "3) Get all employees"
    getAllEmployees: [Employee!]!

    "5) Get a single employee by ID"
    searchEmployeeByEid(eid: ID!): Employee

    "8) Search employees by designation or department"
    searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
  }

  "The root Mutation type."
  type Mutation {
    "1) Signup user"
    signup(username: String!, email: String!, password: String!): User

    "4) Add a new employee"
    addNewEmployee(
      first_name: String!,
      last_name: String!,
      email: String!,
      gender: String,
      designation: String!,
      salary: Float!,
      date_of_joining: String!,
      department: String!,
      employee_photo: String
    ): Employee

    "6) Update employee by ID"
    updateEmployeeByEid(
      eid: ID!,
      first_name: String,
      last_name: String,
      email: String,
      gender: String,
      designation: String,
      salary: Float,
      date_of_joining: String,
      department: String,
      employee_photo: String
    ): Employee

    "7) Delete employee by ID"
    deleteEmployeeByEid(eid: ID!): String
  }
`);

module.exports = schema;
