const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

connectDb();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(logger);

app.use("/api/products", productRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Application is running on localhost:${PORT}`)
);
