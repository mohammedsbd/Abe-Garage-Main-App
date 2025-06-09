//import the express module
const express = require('express');
//call the router method of express module
const router = express.Router();
//import the install router
const installRouter = require('./install.routes.js');
//import the employee router
const employeeRouter = require('./employee.routes.js');
//import the login router
const loginRouter = require('./login.routes.js');
//add the install router to the main router
//add the login route to the main router
router.use(loginRouter);
router.use(installRouter);
//add the employee router to the main router
router.use(employeeRouter);
//export the router module to be used in other modules

module.exports = router;
// This file serves as the main entry point for routing in the application.
