const { body } = require('express-validator');

const validateRegister = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

module.exports = {
  validateRegister,
  validateLogin,
};
