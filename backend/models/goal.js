// importing required modules
const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

// initializing sequelize instance
const sequelizeInstance = dbConnect.Sequelize;

// importing User model
const User = require('./user')

// defining Goal model
class Goal extends Model { }

// defining attributes for Goal model
Goal.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    goal: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },

    checked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        required: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,

        // adding foreign key constraint to the User model
        references: {
            model: User,
            key: "id"
        }
    },

    completed: {
        type: DataTypes.DATE,
        allowNull: true
    }
},

    // defining options for sequelize
    {
        sequelize: sequelizeInstance,
        modelName: 'goal',
        timestamps: true,
        freezeTableName: true
    }
)

// exporting Goal model
module.exports = Goal;
