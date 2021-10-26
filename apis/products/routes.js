const express = require("express");

const {
  productsListFetch,
  productCreate,
  productDelete,
  updateProduct,
} = require("./controllers");

const router = express.Router();

router.get("/", productsListFetch);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

router.put("/:productId", updateProduct);

module.exports = router;
