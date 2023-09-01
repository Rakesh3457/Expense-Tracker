// require('dotenv').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenseTracker', 'root', 'Golu@3457', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;