const express = require("express");
const {
  fetchProductList,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers");

const router = express.Router();

router.post("/", createProduct);

router.get("/", fetchProductList);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;
