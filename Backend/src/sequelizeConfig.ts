import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('xepdb1', 'LEARNINGDBUSER', 'tp4', {
    host: 'localhost', // Replace with your Oracle DB host
    dialect: 'oracle',
    dialectModule: require('oracledb'), // Use the oracledb driver
    logging: console.log, // Set to false to disable logging
});


export default sequelize;
