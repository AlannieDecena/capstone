const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user')


class Goal extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Goal.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    goal: {
        type: DataTypes.STRING, allowNull: false, required: true,
     
    },
    dateStart: {
        type: DataTypes.DATE, allowNull: false, required: false
    },

    dateEnd: {
        type: DataTypes.DATE, allowNull: false, required: false
    },

    userId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: User,
            key: "id"
        }
    },

   
},
    {
        sequelize: sequelizeInstance, modelName: 'goal', timestamps: true, freezeTableName: true
    }
)
module.exports = Goal;


