const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class User extends Model { }
//Sequelize will create this table if it doesn't exist on startup
User.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    name: {
        type: DataTypes.STRING, allowNull: false, required: true,
     
    },
    email: {
        type: DataTypes.STRING, allowNull: false, required: true
    },

    password: {
        type: DataTypes.STRING, allowNull: false, required: true
    },

    gender: {
        type: DataTypes.STRING, allowNull: true, required: false
    },
   
    age: {
        type: DataTypes.INTEGER, allowNull: true, required: false
    },
   
},
    {
        sequelize: sequelizeInstance, modelName: 'user', timestamps: true, freezeTableName: true
    }
)
module.exports = User;


