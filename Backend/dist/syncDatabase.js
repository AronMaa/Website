"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig_1 = __importDefault(require("./sequelizeConfig")); // Import the configured Sequelize instance
sequelizeConfig_1.default.sync({ force: true, alter: true }) // Use force: true to drop the table if it exists and recreate it
    .then(() => {
    console.log('Database synced and tables created');
})
    .catch((err) => {
    console.error('Error syncing the database:', err);
});
