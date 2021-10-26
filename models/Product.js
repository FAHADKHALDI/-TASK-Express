const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: String,
  slug: String,
  Image: String,
  description: String,
  color: String,
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
