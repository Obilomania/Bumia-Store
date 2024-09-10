const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const errorHandler = require("./Middlewares/errorMiddleware");
const morgan = require("morgan");
const cors = require("cors");


//Routes
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const categoryRoute = require("./Routes/categoryRoute");
const couponRoute = require("./Routes/couponRoute")
const blogRoute = require("./Routes/blogRoute");
const brandRoute = require("./Routes/brandRoute");
const cartRoute = require("./Routes/cartRoute");
const paymentRoute = require("./Routes/paymentRoute");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://bitbyvest.onrender.com", "http://localhost:3000"], // List your allowed origins
    credentials: true, // Allow credentials (cookies)
    methods: ["GET", "POST", "PUT","PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//Route Direction lol
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/blog", blogRoute);
app.use("/api/cart", cartRoute);
app.use("/api/payment", paymentRoute);
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
