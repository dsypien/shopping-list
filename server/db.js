const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shoppinglist', 'username', 'password', {
   dialect: 'sqlite',
   host: './shoppinglist.sqlite',
});

module.exports = sequelize;

