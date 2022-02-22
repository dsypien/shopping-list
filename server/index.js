const express = require("express");
const sequelize = require("./db");
const ShoppingList = require("./models/Shoppinglist");

sequelize.sync().then(() => console.log("database is ready"));

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

// POST /shoppinglist
app.post('/shoppingList', (req, res) => {
   const { itemName, description, quantity, purchased } = req.body;
   
   ShoppingList.create({ itemName, description, quantity, purchased })
      .then((list) => {
         res.send(list);
      })
      .catch((err) => {
         console.log(`Error: inserting shopping list. ${JSON.stringify(err)}`);
      })
});

// GET /api/shoppinglist
app.get('/shoppingList', (req, res) => {
   ShoppingList.findAll()
      .then( list => {
         res.json(list);
      })
      .catch((err) => {
         console.log(`Error: retrieving shopping list. ${JSON.stringify(err)}`);
      });
});

// PUT /api/shoppinglist/:id (can also use this for toggling)
app.put('/shoppingList/:id', (req, res) => {
   const id = parseInt(req.params.id);
});

// DELETE /api/shoppinglist/:id
app.delete('/shoppingList/:id', (req, res) => {
   const id = parseInt(req.params.id);
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})