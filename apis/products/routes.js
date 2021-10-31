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
  product = fetchProduct(productId, next);
});

router.post("/", createProduct);

router.get("/", fetchProductList);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;
