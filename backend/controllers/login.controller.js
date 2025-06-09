//import the login service
const loginService = require('../services/login.service');
//import the jwt token
const jwt = require('jsonwebtoken');
//import the secret key from the environment variables
const jwtSecret=process.env.JWT_SECRET;
async function login(req, res,next) {
    try {
        console.log(req.body)
        const employeeData = req.body;
        //call the login service to authenticate the user
        const employee = await loginService.login(req.body);
        //send the result as a response
        res.status(200).json(result);
    } catch (error) {
        //handle any errors that occur during the login process
        next(error);
    }
}

//export the login function to be used in other modules
module.exports = {
    login
};