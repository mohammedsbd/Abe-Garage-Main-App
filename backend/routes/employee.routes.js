//import the express module
const express = require('express');
//call the express router method
const router = express.Router();
//import the employee controller module
const employeeController = require('../controllers/employee.controller.js');
// Import middleware 
const authMiddleware = require("../middleware/auth.middelware.js");
// Create a route to handle the add employee request on post
router.post("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.createEmployee);

// Create a route to handle the get all employees request on get
router.get("/api/employees", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.getAllEmployees);

// router.post("/api/employee", employeeController.createEmployee);


// Export the router
module.exports = router;