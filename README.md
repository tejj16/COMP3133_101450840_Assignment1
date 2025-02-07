# Employee Management System (GraphQL + Node.js + MongoDB)
## Features
1. **Signup (Mutation)**  
   Create a new user account.  
2. **Login (Query)**  
   Authenticate an existing user.  
3. **Get All Employees (Query)**  
   Retrieve a list of all employees.  
4. **Add New Employee (Mutation)**  
   Create a new employee record.  
5. **Search Employee by ID (Query)**  
   Get employee details by `_id`.  
6. **Update Employee by ID (Mutation)**  
   Modify employee information.  
7. **Delete Employee by ID (Mutation)**  
   Remove an employee by `_id`.  
8. **Search Employee by Designation or Department (Query)**

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
Configure MongoDB
Update your MongoDB connection string in config/db.js (or wherever you manage connections).

Run the Server

bash
Copy
node server.js
By default, the server listens on http://localhost:4000.

Test with GraphiQL
Go to http://localhost:4000/graphql in your browser. Use sample queries/mutations to test all functionalities.

Scripts
npm start: Runs the server (production mode).
npm run dev: (If configured) Runs the server with nodemon for auto-restarts.
