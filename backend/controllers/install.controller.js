// Import the install service to handle the install logic
const installService = require("../services/install.service");

// Create a function to handle the install request
async function install(req, res, next) {
  const installMessage = await installService.install();

  // Check if the install was successful or not by sending the appropriate status code
  if (installMessage.status == 200) {
    // If successful, send response to the client with JSON
    res.status(200).json({
      message: installMessage
    });
  } else {
    // If not successful, send response to the client with JSON
    res.status(500).json({
      message: installMessage
    });
  }
}

module.exports = {
  install, // Export the install function to be used in other modules
};
