const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user')


class Mood extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Mood.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    mood: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
     
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
        sequelize: sequelizeInstance, modelName: 'mood', timestamps: true, freezeTableName: true
    }
)
module.exports = Mood;


