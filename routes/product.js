const express = require("express");

const router = express.Router();
const Product = require("../models/product");

router.post("/createProduct", async (req, res) => {
  try {
    data = req.body;

    product = new Product(data);

    savedProduct = await product.save();

    res.status(201).send(savedProduct);
  } catch (error) {
    res.send(error);
  }
});

// get all products with async await
router.get("/getAllProducts", async (req, res) => {
  try {
    products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(err);
  }
});

module.exports = router;
