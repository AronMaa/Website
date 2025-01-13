"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningFact = void 0;
const sequelize_1 = require("sequelize");
const sequelizeConfig_1 = __importDefault(require("./sequelizeConfig"));
class LearningFact extends sequelize_1.Model {
}
exports.LearningFact = LearningFact;
LearningFact.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically generate the id for new rows
    },
    fact: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false, // This column cannot be null
    },
    learningPackageId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false, // This column cannot be null, must reference a LearningPackage
        references: {
            model: 'LearningPackage', // The table to reference
            key: 'id', // The column to reference
        },
        onDelete: 'CASCADE', // If the LearningPackage is deleted, delete associated facts
    },
    disabled: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false, // Default value for new facts is false (not disabled)
        allowNull: false, // This column cannot be null
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW, // Automatically set the timestamp
        allowNull: false,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW, // Automatically set the timestamp
        allowNull: false,
    },
}, {
    sequelize: sequelizeConfig_1.default, // Pass the Sequelize instance
    modelName: 'LearningFact', // The name of the model
    tableName: 'LearningFact', // Explicit table name
    timestamps: false, // Automatically manage `createdAt` and `updatedAt`
    underscored: true, // Use snake_case for column names
});
