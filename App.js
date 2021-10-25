const express = require("express");
const products = require("./products");

const app = express();

app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const product = products.find(
    (product) => product.id === +req.params.productId
  );
  res.json(product);
});

app.post("/api/products", (req, res) => {
  console.log("Your post is here:", req.body);
  const newArray = products.push((product) => product === req.body);
  res.json(newArray);
});

// app.delete("/api/products/:productId", (req, res) => {
//   const product = products.find(
//     (product) => product.id === +req.params.productId
//   );
//   res.json(products.filter(product.name));
// });
