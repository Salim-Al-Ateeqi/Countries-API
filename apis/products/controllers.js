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

exports.exports.createProduct = async (req, res, next) => {
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
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (product) {
      return res.json(product);
    } else {
      next({
        status: 404,
        message: "Product not found!",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete({ _id: productId });

    if (product) {
      return res.status(204).end();
    } else {
      next({
        status: 404,
        message: "Product not found!",
      });
    }
  } catch (error) {
    next(error);
  }
};
