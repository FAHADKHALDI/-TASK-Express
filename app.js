const express = require("express");
const productRoutes = require("./apis/products/routes");

const app = express();

const connectDb = require("./database");

app.use(express.json());
app.use("/api/products", productRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`this app is running on localhost:${PORT}`));

connectDb();
