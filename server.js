const express = require("express");
const User = require("./models/user");
const Product = require("./models/product");
require("./config/connect");

// inhereted all functionality on express
const app = express();
app.use(express.json());

// -------------------------------------------------------

app.post("/createUser", async (req, res) => {
  try {
    data = req.body;

    user = new User(data);

    savedUser = await user.save();

    res.send(savedUser);
  } catch (error) {
    res.send(error);
  }
});

app.post("/createProduct", async (req, res) => {
  try {
    data = req.body;

    product = new Product(data);

    savedProduct = await product.save();

    res.send(savedProduct);
  } catch (error) {
    res.send(error);
  }
});

// get all users with async await
app.get("/getAllUsers", async (req, res) => {
  try {
    users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(err);
  }
});

// get all products with async await
app.get("/getAllProducts", async (req, res) => {
  try {
    products = await Product.find();
    res.send(products);
  } catch (error) {
    res.send(err);
  }
});

// get user by id

// app.get("/getUserById/:id", (req, res) => {
//   myId = req.params.id;
//   User.findOne({ _id: myId })
//     .then((user) => {
//       res.send(user);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

app.get("/getUserById/:id", async (req, res) => {
  try {
    myId = req.params.id;
    user = await User.findOne({ _id: myId });
    res.send(user);
  } catch (error) {
    res.send(err);
  }
});

// -------------------------------------------------------
app.listen(3000, () => {
  console.log("Server is running!");
});
