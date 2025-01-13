"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var learningPackage_1 = require("./learningPackage");
// Define your Oracle connection settings
// @ts-ignore
var sequelize = new sequelize_1.Sequelize({
    dialect: 'oracle',
    host: 'localhost', // Your Oracle DB host (localhost for local installation)
    port: 1521, // Default Oracle port
    username: "learningDbUser",
    password: "tp4",
    database: 'xepdb1', // Oracle service name, could be different based on your setup (like XE or ORCL)
    models: [learningPackage_1.default],
    logging: console.log,
});
exports.default = sequelize;
