const { Sequelize } = require('sequelize');                                                    //create a Sequelize instance, which represents the connection to your database.

const sequelize = new Sequelize('postgres', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;