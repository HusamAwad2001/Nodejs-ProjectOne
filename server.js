const express = require("express");

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");

require("./config/connect");

// inhereted all functionality on express
const app = express();
app.use(express.json());

// http://127.0.0.1:3000/routeName/request

app.use("/user", userRoute);
app.use("/product", productRoute);

app.listen(3000, () => {
  console.log("Server is running!");
});
