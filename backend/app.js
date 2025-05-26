//import express module
const express = require('express');
//import the dotenv module to load environment variables
require('dotenv').config();
// //import the database connection module
// const db = require('./config/db.config.js');
//import the port number from the environment variables
const PORT = process.env.PORT || 3000;
//create web server using express
const app = express();
//start the webserver and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});