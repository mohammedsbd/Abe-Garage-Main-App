//import the express module
const express = require('express');
//call the express router method
const router = express.Router();
//import the employee controller module
const employeeController = require('../controllers/employee.controller.js');
// Create a route to handle the add employee request on post
router.post("/api/employee", employeeController.createEmployee);
// Export the router
module.exports = router;