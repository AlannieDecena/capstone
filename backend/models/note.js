// Importing necessary modules
const { DataTypes, Model } = require("sequelize");

// Importing database connection
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

// Importing User model
const User = require('./user')

// Defining Note model
class Note extends Model { }

// Initializing Note model
Note.init({
    id: {
        type: DataTypes.INTEGER, // Data type of the column
        allowNull: false, // Column cannot be null
        autoIncrement: true, // Column is auto-incrementing
        primaryKey: true // Column is the primary key of the table
    },

    note: {
        type: DataTypes.STRING, // Data type of the column
        allowNull: false, // Column cannot be null
        required: true, // Column is required
    },

    userId: {
        type: DataTypes.INTEGER, // Data type of the column
        allowNull: false, // Column cannot be null
        required: true, // Column is required
        references: { // Column is a foreign key and references the User model's id column
            model: User, // Referenced model
            key: "id" // Referenced column
        }
    },


},
    {
        sequelize: sequelizeInstance, // Sequelize instance with the connection details
        modelName: 'note', // Name of the model
        timestamps: true, // Automatically adds createdAt and updatedAt columns to the table
        freezeTableName: true // Prevents Sequelize from automatically pluralizing the table name
    }
)

// Exporting Note model
module.exports = Note;
