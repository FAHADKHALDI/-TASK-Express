const e = require("express");
const Product = require("../../models/Product");

exports.productsListFetch = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.log(
      "🚀 ~ file: controllers.js ~ line 9 ~ exports.productsListFetch= ~ error",
      error
    );
  }
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(
      "🚀 ~ file: controllers.js ~ line 21 ~ exports.productCreate= ~ error",
      error
    );
  }
};

exports.productDelete = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      await product.remove();
      return res.status(204).end();
    } else {
      return res.status(404).jason({ message: "product not found!" });
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: controllers.js ~ line 38 ~ exports.productDelete ~ error",
      error
    );
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      const foundProduct = await Product.findOneAndUpdate(product, req.body);
      return res.status(204).json(foundProduct);
    } else {
      return res.status(404).jason({ message: "product not found!" });
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: controllers.js ~ line 57 ~ exports.updateProduct= ~ error",
      error
    );
  }
};
