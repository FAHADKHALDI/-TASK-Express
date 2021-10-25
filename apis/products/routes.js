const express = require("express");

const {
  productsListFetch,
  productCreate,
  productDelete,
} = require("./controllers");

const router = express.Router();

router.get("/", productsListFetch);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

module.exports = router;
