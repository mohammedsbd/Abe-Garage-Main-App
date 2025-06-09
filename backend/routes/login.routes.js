//import the express module
const express = require('express');
//import the login controller
const loginController = require('../controllers/login.controller');
//create a router object
const router = express.Router();
//define the login route
router.post('api/employee/login', loginController.login);
//export the router
module.exports = router;