const express = require("express");
const {
  fetchProductList,
  createProduct,
  deleteProduct,
} = require("./controllers");

const router = express.Router();

router.get("/", fetchProductList);

router.post("/", createProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;
