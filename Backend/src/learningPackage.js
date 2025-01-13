"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelizeConfig_1 = require("./sequelizeConfig"); // Import the configured Sequelize instance
// Define the LearningPackage model
var LearningPackage = /** @class */ (function (_super) {
    __extends(LearningPackage, _super);
    function LearningPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LearningPackage;
}(sequelize_1.Model));
// Initialize the LearningPackage model
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
            max: 5, // Difficulty must be between 1 (easy) and 5 (hard)
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
    timestamps: true, // Automatically manage `createdAt` and `updatedAt`
    underscored: true, // Use snake_case for column names
});
exports.default = LearningPackage;
