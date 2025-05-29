//import mysql module promise wrapper
const mysql = require('mysql2/promise');
//import dotenv to load environment variables
const dotenv = require('dotenv');
//load environment variables from .env file
dotenv.config();
//create a connection to the database using environment variables
const dbConfig =({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // connectionLimit: 10, // Set the maximum number of connections in the pool
    });
//create a connection pool to the database
const pool = mysql.createPool(dbConfig);
// prepare a function that will execute the sql queries asynchronously
async function query(sql, params) {
    const [rows,fields] = await pool.execute(sql, params);
    return rows;
}
//export the Query function to be used in other modules

module.exports = {query}





