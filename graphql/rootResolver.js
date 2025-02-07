const userResolvers = require('../resolvers/userResolvers');
const employeeResolvers = require('../resolvers/employeeResolvers');

const rootResolver = {
  // User operations
  signup: userResolvers.signup,
  login: userResolvers.login,

  // Employee queries
  getAllEmployees: employeeResolvers.getAllEmployees,
  searchEmployeeByEid: employeeResolvers.searchEmployeeByEid,
  searchEmployeeByDesignationOrDepartment:
    employeeResolvers.searchEmployeeByDesignationOrDepartment,

  // Employee mutations
  addNewEmployee: employeeResolvers.addNewEmployee,
  updateEmployeeByEid: employeeResolvers.updateEmployeeByEid,
  deleteEmployeeByEid: employeeResolvers.deleteEmployeeByEid,
};

module.exports = rootResolver;
