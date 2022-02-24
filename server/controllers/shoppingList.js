const ShoppingList = require("../models/Shoppinglist");

exports.get = (req,res) => {
   const pageSize = 5;
   let page = parseInt(req.query.page) || 1;

   ShoppingList.findAndCountAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [
        ["updatedAt", "DESC"]
      ]
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
}

exports.post = (req, res) => {
   const { itemName, description, quantity, purchased } = req.body;
   
   ShoppingList.create({ itemName, description, quantity, purchased })
      .then( list => {
         res.send(list);
      })
      .catch( err => {
         console.log(`Error: inserting shopping list. ${JSON.stringify(err)}`);
      })
}

exports.put = (req, res) => {
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
}

exports.delete = (req, res) => {
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
}