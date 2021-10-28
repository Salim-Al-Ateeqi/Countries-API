const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");
const morgan = require("morgan");

connectDb();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

app.use("/api/products", productRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Application is running on localhost:${PORT}`)
);
