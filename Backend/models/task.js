const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Task = db.define('Task', {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taskID: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  description: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    defaultValue: []
  },
  userID: {
    type: DataTypes.UUID,                                     // Sequelize understands that this attribute will serve as a foreign key
    allowNull: false                                          // Sequelize uses foreign key constraints to establish and enforce relationships between tables in your database
  }
});

module.exports = Task;
  