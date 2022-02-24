const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const shoppingListRouter = require("./routes/shoppingList");

sequelize.sync().then(() => console.log("database is ready"));

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/shoppinglist", shoppingListRouter);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})