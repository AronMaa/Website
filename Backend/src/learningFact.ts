import {DataTypes, Model } from 'sequelize';
import sequelize from "./sequelizeConfig";

class LearningFact extends Model {
    public id!: number;
    public fact!: string;
    public learningPackageId!: number; // Foreign key to associate with LearningPackage
    public disabled!: boolean;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

LearningFact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, // Automatically generate the id for new rows
        },
        fact: {
            type: DataTypes.STRING(255),
            allowNull: false, // This column cannot be null
        },
        learningPackageId: {
            type: DataTypes.INTEGER,
            allowNull: false, // This column cannot be null, must reference a LearningPackage
            references: {
                model: 'LearningPackage', // The table to reference
                key: 'id', // The column to reference
            },
            onDelete: 'CASCADE', // If the LearningPackage is deleted, delete associated facts
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Default value for new facts is false (not disabled)
            allowNull: false, // This column cannot be null
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, // Automatically set the timestamp
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, // Automatically set the timestamp
            allowNull: false,
        },
    },
    {
        sequelize, // Pass the Sequelize instance
        modelName: 'LearningFact', // The name of the model
        tableName: 'LearningFact', // Explicit table name
        timestamps: false, // Automatically manage `createdAt` and `updatedAt`
        underscored: true, // Use snake_case for column names
    }
);

export {LearningFact};