// Importing the necessary modules
const { DataTypes, Model } = require("sequelize");
// Importing the database connection module
let dbConnect = require("../dbConnect");
// Creating an instance of Sequelize
const sequelizeInstance = dbConnect.Sequelize;
// Importing the User model
const User = require('./user')

// Creating a model for Mood that extends the Sequelize Model class
class Mood extends Model { }

// Defining the schema for the Mood model
Mood.init({
    // Defining the id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    // Defining the mood column
    mood: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },

    // Defining the userId column and adding a foreign key constraint to the User model
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
        references: {
            model: User,
            key: "id"
        }
    },
},
{
    // Passing the sequelize instance, setting the model name, enabling timestamps, and freezing the table name
    sequelize: sequelizeInstance,
    modelName: 'mood',
    timestamps: true,
    freezeTableName: true
})

// Exporting the Mood model
module.exports = Mood;
