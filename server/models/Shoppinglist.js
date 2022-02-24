const sequelize = require('../db');
const { Model, DataTypes } = require('sequelize');

class ShoppingList extends Model {};

ShoppingList.init({
   id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
   itemName: {
      type: DataTypes.STRING
   },
   description: {
      type: DataTypes.STRING
   },
   quantity: {
      type: DataTypes.TINYINT
   },
   purchased: {
      type: DataTypes.BOOLEAN
   }
}, {
   sequelize,
   modelName: 'shoppinglist',
   indexes: [{ unique: true, fields: ['id'] }]
})

module.exports = ShoppingList;