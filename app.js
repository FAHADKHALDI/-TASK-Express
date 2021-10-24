const express = require("express");
const products = require("./products");
const app = express();

const PORT = 8000;
app.listen(PORT, () => console.log(`this app is running on localhost:${PORT}`));
app.get("/api/products", (req, res) => {
  res.json(products);
});
