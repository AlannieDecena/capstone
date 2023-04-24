const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user')


class Note extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Note.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    note: {
        type: DataTypes.STRING, allowNull: false, required: true,
     
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
        sequelize: sequelizeInstance, modelName: 'note', timestamps: true, freezeTableName: true
    }
)
module.exports = Note;


