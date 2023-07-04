const express = require("express");

const router = express.Router();
const User = require("../models/user");

router.post("/createUser", async (req, res) => {
  try {
    data = req.body;

    user = new User(data);

    savedUser = await user.save();

    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all users with async await
router.get("/getAllUsers", async (req, res) => {
  try {
    users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(err);
  }
});

// get user by id

// router.get("/getUserById/:id", (req, res) => {
//   myId = req.params.id;
//   User.findOne({ _id: myId })
//     .then((user) => {
//       res.send(user);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

router.get("/getUserById/:id", async (req, res) => {
  try {
    myId = req.params.id;
    user = await User.findOne({ _id: myId });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(err);
  }
});

// delete user by id
router.delete("/deleteUser/:id", async (req, res) => {
  try {
    id = req.params.id;
    deletedUser = await User.findOneAndDelete({ _id: id });
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update user

router.put("/update/:id", async (req, res) => {
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

module.exports = router;
