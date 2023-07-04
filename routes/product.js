const express = require("express");

const router = express.Router();

const Product = require("../models/product");

const multer = require("multer");

filename = "";

const myStorage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, redirect) => {
    let date = Date.now();
    // images/png
    let fl = date + "." + file.mimetype.split("/")[1];
    redirect(null, fl);
    filename = fl;
  },
});

const upload = multer({ storage: myStorage });

//
router.post("/createProduct", upload.any("image"), async (req, res) => {
  console.log("create product");
  try {
    data = req.body;

    product = new Product(data);

    product.image = filename;

    savedProduct = await product.save();

    filename = "";

    res.status(200).send(savedProduct);
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
