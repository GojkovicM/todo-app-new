const { Sequelize, DataTypes } = require('sequelize');                     //These are used to define the structure of your database tables and columns.
const db = require('../db');                                               //establishes a connection to your PostgreSQL database.

const User = db.define('User', {                                         //Define attributes such as name, surname, username, and userID using the DataTypes provided by Sequelize.
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  userID: {
    type: DataTypes.UUID,                                                //UUID (Universally Unique Identifier), which is a unique identifier that is automatically generated for each user
    defaultValue: Sequelize.UUIDV4,                              
    primaryKey: true
  }
});

module.exports = User;