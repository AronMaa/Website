"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningPackage = void 0;
const sequelize_1 = require("sequelize");
const sequelizeConfig_1 = __importDefault(require("./sequelizeConfig"));
const learningFact_1 = require("./learningFact");
// Define the LearningPackage model
class LearningPackage extends sequelize_1.Model {
}
exports.LearningPackage = LearningPackage;
LearningPackage.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically generate the id for new rows
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false, // This column cannot be null
    },
    description: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true, // This column can be null
    },
    category: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false, // This column cannot be null
    },
    targetAudience: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true, // This column is optional
    },
    difficulty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false, // This column cannot be null
        validate: {
            min: 1,
            max: 10, // Difficulty must be between 1 (easy) and 10 (hard)
        },
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
    modelName: 'LearningPackage', // The name of the model
    tableName: 'LearningPackage', // Explicit table name
    timestamps: false, // Automatically manage `createdAt` and `updatedAt`
    underscored: true, // Use snake_case for column names
});
LearningPackage.hasMany(learningFact_1.LearningFact, {
    foreignKey: 'learningPackageId',
});
learningFact_1.LearningFact.belongsTo(LearningPackage, {
    foreignKey: 'learningPackageId',
});
