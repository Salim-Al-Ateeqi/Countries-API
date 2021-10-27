const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String,
  color: String,
  quantity: Number,
  price: Number,
});

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "name" });
module.exports = mongoose.model("Product", ProductSchema);
