const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const date = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}); // Create a Date object with the current date and time
const time = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const dateTimeString = `${date} ${time}`;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    requied: true,
    index: true,
  },
  lastname: {
    type: String,
    requied: true,
    index: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a Password"],
    minLength: [6, "Password must be up to 6 characters"],
    //   maxLength: [23, "Password cant be more than 23 characters"],
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  registrationDate: {
    type: String,
    default: dateTimeString,
  },
  role: {
    type: String,
    default: "User",
  },
  isBlocked: { type: Boolean, default: false },
  cart: [
    {
      count: {
        type: Number,
        default: 1,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  wishList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  ],
});

//Encrypt Password before saving to Db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
