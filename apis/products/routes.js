const express = require("express");

const {
  productsListFetch,
  productCreate,
  productDelete,
  updateProduct,
  fetchProduct,
} = require("./controllers");

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", productsListFetch);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

router.put("/:productId", updateProduct);

module.exports = router;
