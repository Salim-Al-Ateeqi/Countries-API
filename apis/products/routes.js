const express = require("express");
const {
  fetchProductList,
  createProduct,
  deleteProduct,
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

router.post("/", createProduct);

router.get("/", fetchProductList);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;
