//import the query function from db config file
const { dirname, resolve } = require('path');
const conn = require('../config/db.config.js');
//install fs module to read and write files for sql
const fs = require('fs');
//write a function to create the database tables
async function install() {
    //crate a varaibel to hold the sql file path
    const queryFile = __dirname+ '/sql/initial-queries.sql';
    console.log(queryFile)
    //read the sql file and store it in a variable
    //temporary variabel use
    let queries=[];
    let finalMessage={};
    //tmepline variabel tracks the current line being processed in sql file every line and even comemnts
    let templine='';
    //read the sql file
    const lines = fs.readFileSync(queryFile, 'utf8').split('\n');
    //iterate over all lines
    lines.forEach((line) => {
        //trim the line to remove any leading or trailing whitespace
        if (line.trim().startsWith("--") || line.trim() === "") {
          //if the line starts with -- it is a comment so skip it
          return;
        }
        //if the line is not empty or a comment, add it to the templine variable
        templine += line
        if (line.trim().endsWith(";")) {
          //if the line ends with ; it is the end of a query so push it to the queries array
          //prepare the individual query by trimming the templine variable
         const sqlQuery=templine.trim() 
         //add query to the list of queries
            queries.push(sqlQuery);
          templine = ''; //reset the templine variable for the next query
        }
        resolve("queries are added to the list")
    });
    // loop through the queries array and execute each query

    for (let i = 0; i < queries.length; i++) {
        try {
            //execute the query using the Query function from db config file
          const result=  await conn.query(queries[i]);
          console.log("tabels created successfully", result);
            finalMessage = { status: 200, message: "Database tables created successfully" };
        } catch (err) {
            console.error("Error creating tables:", err);
            finalMessage = { status: 500, message: "Error creating database tables: " + err.message };
          // Exit the loop if an error occurs

           
        }
    }
    //prepare the final message to be returned to the controller
    if (!finalMessage.message) {
        finalMessage.message = "Database tables created successfully";
        finalMessage.status = 200;
    } else {
        finalMessage.status = 500;
    }//return the final message
    return finalMessage;

}
//export the install function to be used in the controller
module.exports = {
    install, // Export the install function to be used in the controller
};

// This code is responsible for reading an SQL file, parsing its contents, and executing the SQL queries to create database tables.