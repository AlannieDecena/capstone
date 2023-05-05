'use strict';

// Load environment variables from a .env file
require("dotenv").config();

// Import the Sequelize package
//Sequelize is a package that abstracts out the need to write SQL queries,
//relying instead on their models to do it for you
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize with the database credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Log the database user to the console
console.log(process.env.DB_USER)

// Define an async function that checks if the database is connected successfully
const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Successful connection to MySQL Database ${process.env.DB_NAME}`);
    } catch (error) {
        console.error('Unable to connect to MySQL database:', error);
        process.exit(1);
    }
}

// Call the async function to connect to the database
connectMysql();

// Export the Sequelize instance and the connectMysql function for use in other files
module.exports = {
    Sequelize: sequelize,
    connectMysql
}
