const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkPassword = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  checkPassword,
  generateToken,
};
