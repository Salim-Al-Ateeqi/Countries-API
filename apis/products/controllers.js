const Product = require("../../models/Product");
const ProductSchema = require("../../models/Product");

const fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await ProductSchema.create(req.body);
    return res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

exports.fetchProductList = async (req, res, next) => {
  try {
    const products = await ProductSchema.find();

    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await ProductSchema.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await req.Product.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
