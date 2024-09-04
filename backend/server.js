const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const errorHandler = require("./Middlewares/errorMiddleware");
const morgan = require("morgan");

//Routes
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const categoryRoute = require("./Routes/categoryRoute");
const couponRoute = require("./Routes/couponRoute")
const blogRoute = require("./Routes/blogRoute");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route Direction lol
app.use("/api/authentication", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/blog", blogRoute);
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use(errorHandler);
//Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
