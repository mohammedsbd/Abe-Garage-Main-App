//import the express module
const express = require('express');
//call the router method of express module
const router = express.Router();
//import the install router
const installRouter = require('./install.routes.js');
//add the install router to the main router
router.use('/install', installRouter);
//export the router module to be used in other modules

module.exports = router;
// This file serves as the main entry point for routing in the application.
