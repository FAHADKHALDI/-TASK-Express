const e = require("express");
const Product = require("../../models/Product");

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

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
    await req.product.remove();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
