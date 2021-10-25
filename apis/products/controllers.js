let products = require("../../products");

const fetchProductList = (req, res) => {
  return res.json(products);
};

const createProduct = (req, res) => {
  products.push(req.body);
  return res.status(201).json(req.body);
};

const deleteProduct = (req, res) => {
  const product = products.find(
    (product) => product.id === +req.params.productId
  );

  if (product) {
    products = products.filter(
      (product) => product.id !== +req.params.productId
    );
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: "Product not found!" });
  }
};
module.exports = { fetchProductList, createProduct, deleteProduct };
