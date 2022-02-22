const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const ShoppingList = require("./models/Shoppinglist");

sequelize.sync().then(() => console.log("database is ready"));

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/shoppingList', (req, res) => {
   const { itemName, description, quantity, purchased } = req.body;
   
   ShoppingList.create({ itemName, description, quantity, purchased })
      .then( list => {
         res.send(list);
      })
      .catch( err => {
         console.log(`Error: inserting shopping list. ${JSON.stringify(err)}`);
      })
});

app.get('/shoppingList', async (req, res) => {
   const pageSize = 3;
   let page = parseInt(req.query.page) || 0;

   ShoppingList.findAndCountAll({
      limit: pageSize,
      offset: page
   })
      .then( list => {
         res.json({
            pagination: {
               currentPage: page,
               totalPages: Math.ceil(list.count/pageSize),
               pageSize,
               totalItems: list.count
            },
            rows: list.rows
         })
      })
      .catch( err => {
         console.log(`Error: retrieving shopping list. ${JSON.stringify(err)}`);
      });
});

app.put('/shoppingList/:id', (req, res) => {
   const id = req.params.id;
   const { itemName, description, quantity, purchased } = req.body;

   ShoppingList.update(
      {
         itemName: itemName,
         description: description, 
         quantity: quantity, 
         purchased: purchased},
      {
         where: {
            id: id
      }}
   ).then( list => {
      res.send(list);
   }).catch( err => {
      console.log(`Error: updating item ${id}. ${JSON.stringify(err)}`);
   })
});

app.delete('/shoppingList/:id', (req, res) => {
   const id = req.params.id;

   ShoppingList.destroy({
      where: {
         id: id
      }
   }).then( () => {
      res.status(200).end();
   })
   .catch( err => {
      console.log(`Error: deleting item ${id}. ${JSON.stringify(err)}`);
   })
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})