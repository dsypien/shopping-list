const express = require('express');
const router = express.Router();

const shopping_list_controller = require("../controllers/shoppingList");

router.get('/', shopping_list_controller.get);
router.post('/', shopping_list_controller.post);
router.put('/:id', shopping_list_controller.put);
router.delete('/:id', shopping_list_controller.delete);

module.exports = router;