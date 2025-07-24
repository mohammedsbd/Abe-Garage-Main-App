// model.js

const { Sequelize, DataTypes } = require('sequelize');

// Connect to MySQL
const sequelize = new Sequelize('garage_app', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define Vehicle model
const Vehicle = sequelize.define('Vehicle', {
  licensePlate: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  ownerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleType: {
    type: DataTypes.ENUM('Car', 'Motorcycle', 'Truck', 'Other'),
    allowNull: false,
  },
  entryTime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isParked: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: false, // Disable createdAt and updatedAt fields
});

// Export models and sequelize instance
module.exports = {
  sequelize,
  Vehicle,
};
