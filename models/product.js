const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = Product;
