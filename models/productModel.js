const mongoose = require("mongoose");

// productSchema for https://fakestoreapi.com/products

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "A product must have an id"],
  },
  title: {
    type: String,
    required: [true, "A product must have a title"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
  },
  category: {
    type: String,
    required: [true, "A product must have a category"],
  },
  image: {
    type: String,
    required: [true, "A product must have an image"],
  },
  rating: {
    rate: {
      type: Number,
      required: [true, "A product must have a rating"],
    },
    count: {
      type: Number,
      required: [true, "A product must have a rating"],
    },
  },
});
const Product = mongoose.model("product", productSchema);
module.exports = Product;
