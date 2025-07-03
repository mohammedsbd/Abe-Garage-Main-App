//import the express module
const express = require('express');
//call the router method of express module
const router = express.Router();
//import the install controller
const installController = require('../controllers/install.controller');
//create a route to handle the install request on get
router.get("/install", installController.install);

//export the router module to be used in other modules
module.exports = router;