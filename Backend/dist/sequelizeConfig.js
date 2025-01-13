"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('xepdb1', 'LEARNINGDBUSER', 'tp4', {
    host: 'localhost', // Replace with your Oracle DB host
    dialect: 'oracle',
    dialectModule: require('oracledb'), // Use the oracledb driver
    logging: console.log, // Set to false to disable logging
});
exports.default = sequelize;
