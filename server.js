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

    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/createProduct", async (req, res) => {
  try {
    data = req.body;

    product = new Product(data);

    savedProduct = await product.save();

    res.status(201).send(savedProduct);
  } catch (error) {
    res.send(error);
  }
});

// get all users with async await
app.get("/getAllUsers", async (req, res) => {
  try {
    users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(err);
  }
});

// get all products with async await
app.get("/getAllProducts", async (req, res) => {
  try {
    products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(err);
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
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(err);
  }
});

// delete user by id
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    id = req.params.id;
    deletedUser = await User.findOneAndDelete({ _id: id });
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update user

app.put("/update/:id", async (req, res) => {
  // id = req.params.id;

  try {
    id = req.params.id;
    newData = req.body;

    updated = await User.findByIdAndUpdate({ _id: id }, newData);

    res.status(200).send(updated);
  } catch (error) {
    res.status(400).send(error);
  }
});

// -------------------------------------------------------
app.listen(3000, () => {
  console.log("Server is running!");
});
