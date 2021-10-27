const ProductSchema = require("../../models/Product");

const fetchProductList = async (req, res) => {
  try {
    const products = await ProductSchema.find();

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "List Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const createdProduct = await ProductSchema.create(req.body);
    return res.status(201).json(createdProduct);
  } catch (error) {
    return res.status(500).json({ message: "Create Error" });
  }
};

// const updateProduct =

const deleteProduct = async (req, res) => {
  try {
    const foundproduct = await ProductSchema.findById(req.params.productId);
    console.log(
      "🚀 ~ file: controllers.js ~ line 26 ~ deleteProduct ~ foundproduct",
      foundproduct
    );

    if (foundproduct) {
      foundproduct.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Delete Error" });
  }
};

module.exports = { fetchProductList, createProduct, deleteProduct };
