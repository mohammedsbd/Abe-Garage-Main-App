//import express module
const express = require('express');
//import the dotenv module to load environment variables
require('dotenv').config();
// //import the database connection module
// const db = require('./config/db.config.js');
//import the port number from the environment variables
const PORT = process.env.PORT;
//import the main router module
const router = require('./routes/index.js');
//import the sanitizer module
const sanitize = require('sanitize');
//import the cors module to allow cross-origin requests
const cors = require("cors");
// Set up the CORS options to allow requests from our front-end
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};
const app = express();
//use cors middleware to allow cross-origin requests
app.use(cors(corsOptions));



//use express.json() middleware to parse JSON requests
app.use(express.json());
//add sanitizer to the express middlware to sanitize the request body
app.use(sanitize.middleware);
// add the route as a middleware to the express app
app.use(router);
//start the webserver and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//export the module to be used in other modules to make it avilabel for all routes
module.exports = app;