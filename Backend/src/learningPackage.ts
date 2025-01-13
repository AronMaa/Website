import {DataTypes, Model } from 'sequelize';
import sequelize from "./sequelizeConfig";
import {LearningFact} from "./learningFact";

// Define the LearningPackage model
class LearningPackage extends Model {
    public id!: number;
    public title!: string;
    public description!: string | null;
    public category!: string;
    public targetAudience!: string | null;
    public difficulty!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

    LearningPackage.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true, // Automatically generate the id for new rows
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false, // This column cannot be null
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true, // This column can be null
            },
            category: {
                type: DataTypes.STRING(255),
                allowNull: false, // This column cannot be null
            },
            targetAudience: {
                type: DataTypes.STRING(255),
                allowNull: true, // This column is optional
            },
            difficulty: {
                type: DataTypes.INTEGER,
                allowNull: false, // This column cannot be null
                validate: {
                    min: 1,
                    max: 10, // Difficulty must be between 1 (easy) and 10 (hard)
                },
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
            modelName: 'LearningPackage', // The name of the model
            tableName: 'LearningPackage', // Explicit table name
            timestamps: false, // Automatically manage `createdAt` and `updatedAt`
            underscored: true, // Use snake_case for column names
        }
    );

LearningPackage.hasMany(LearningFact, {
    foreignKey: 'learningPackageId',
});
LearningFact.belongsTo(LearningPackage, {
    foreignKey: 'learningPackageId',
});

export {LearningPackage};

