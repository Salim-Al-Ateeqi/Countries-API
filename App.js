const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");

connectDb();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Application is running on localhost:${PORT}`)
);
