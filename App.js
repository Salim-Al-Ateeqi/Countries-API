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

app.post("/api/products", (req, res) => {
  console.log("I'M HERE", req);
});
