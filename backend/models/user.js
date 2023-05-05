const { DataTypes, Model } = require("sequelize");

// Importing the dbConnect module which exports the Sequelize instance
let dbConnect = require("../dbConnect");

// Getting the Sequelize instance from dbConnect
const sequelizeInstance = dbConnect.Sequelize;

// Defining a new User class that extends the Sequelize Model class
class User extends Model { }

// Initializing the User model with its attributes
User.init({

    // User ID attribute with integer type, not null, auto-incrementing and primary key
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    // User name attribute with string type, not null, and required
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },

    // User email attribute with string type, not null, and required
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },

    // User password attribute with string type, not null, and required
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },

    // User gender attribute with string type, null, and not required
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
        required: false
    },

    // User age attribute with integer type, null, and not required
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        required: false
    },

},
    {
        // Configuring the User model with its options
        sequelize: sequelizeInstance,
        modelName: 'user',
        timestamps: true,
        freezeTableName: true
    }
)

// Exporting the User model
module.exports = User;
