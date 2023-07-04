const express = require("express");
const User = require("./models/user");
const Product = require("./models/product");
require("./config/connect");

// inhereted all functionality on express
const app = express();
app.use(express.json());

app.post("/addUser", (req, res) => {
  data = req.body;
  user = new User(data);
  user
    .save()
    .then((savedUser) => {
      res.send(savedUser);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/addProduct", (req, res) => {
  data = req.body;
  product = new Product(data);
  product
    .save()
    .then((savedProduct) => {
      res.send(savedProduct);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3000, () => {
  console.log("Server is running!");
});
