const { generateToken } = require("../Config/jwtToken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Cart = require("../Models/cartModel");
const Product = require("../Models/productModel");
const Coupon = require("../Models/couponModel");
const Order = require("../Models/orderModel");

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, phone } = req.body;
  //Validation
  if (!firstname || !lastname || !phone || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 chatacters");
  }

  //Check if user email already exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Email already exists");
  }
  const userNumberExists = await User.findOne({ phone });
  if (userNumberExists) {
    res.status(400);
    throw new Error("Phone Number already exists, Please Try again");
  }

  const newUser = await User.create({
    firstname,
    lastname,
    email,
    password,
    phone,
  });
  //Genrate token for new user
  const token = generateToken({
    _id: newUser._id,
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    email: newUser.email,
    phone: newUser.phone,
    role: newUser.role,
    cart: newUser.cart,
    address: newUser.address,
    wishList: newUser.wishList,
    isBlocked: newUser.isBlocked,
  });

  //send HTTP-Only cookie to clientside
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), //One Day
    sameSite: "none",
    secure: true,
  });
  if (newUser) {
    const {
      _id,
      firstname,
      lastname,
      role,
      email,
      phone,
      registrationDate,
      cart,
      address,
      wishList,
      token,
    } = newUser;
    res.status(201).json({
      _id,
      firstname,
      lastname,
      role,
      email,
      phone,
      registrationDate,
      cart,
      address,
      wishList,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Validate login request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  //Check if user exists in Database
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User not found, please sign up!!!");
  }

  if (user.isBlocked === true) {
    res.status(401);
    throw new Error("Account is Blocked, Please Contact Admin");
  }
  //User exist but check if password is correct
  const passwordisValid = await bcrypt.compare(password, user.password);
  //Genrate token for new user
  const token = generateToken({
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    role: user.role,
    cart: user.cart,
    address: user.address,
    wishList: user.wishList,
    isBlocked: user.isBlocked,
  });

  //send HTTP-Only cookie to clientside
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), //One Day
    sameSite: "none",
    secure: true,
  });

  if (user && passwordisValid) {
    const {
      _id,
      firstname,
      lastname,
      role,
      email,
      phone,
      registrationDate,
      cart,
      address,
      wishList,
    } = user;
    res.status(200).json({
      _id,
      firstname,
      lastname,
      role,
      email,
      phone,
      registrationDate,
      cart,
      address,
      wishList,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});


const changeUserPassword = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("Error, Please try again");
  }
  if (!oldPassword || !newPassword) {
    res.status(400);
    throw new Error("Please fill all inputs");
  }

  const oldPasswordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  if (oldPasswordIsCorrect) {
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } else {
    res.status(400);
    throw new Error("old password is incorrect");
  }
})

//Get All User
const getAllUsers = asyncHandler(async (req, res) => {
  const getEveryUser = await User.find().select("-password");
  if (getEveryUser) {
    res.status(200).json(getEveryUser);
  } else {
    res.status(500);
    throw new Error("Could not Retrieve Users, Please try again");
  }
});

//Get User Profile Data
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    const {
      firstname,
      lastname,
      email,
      phone,
      role,
      _id,
      registrationDate,
      address,
      wishList,
      cart,
    } = user;
    res.status(201).json({
      firstname,
      lastname,
      email,
      phone,
      role,
      _id,
      registrationDate,
      address,
      wishList,
      cart,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found!!!");
  }
});

//Admin Get A single User
const getOneParticularUser = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const theUser = await User.findById(_id);
  if (theUser !== null) {
    const {
      firstname,
      lastname,
      email,
      phone,
      role,
      _id,
      registrationDate,
      address,
      wishList,
      isBlocked,
      cart,
    } = theUser;
    res.status(200).json({
      _id,
      firstname,
      lastname,
      email,
      phone,
      role,
      registrationDate,
      address,
      wishList,
      isBlocked,
      cart,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found!!!");
  }
});

//DELETE A SINGLE USER
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const theUser = await User.findByIdAndDelete(id);
  if (!theUser) {
    res.status(404);
    throw new Error("User Not Found!!!");
  } else {
    res.status(200).json({ message: "User has been deleted" });
  }
});

//UPDATE A SINGLE USER
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    const { firstname, lastname, email, role, phone } = user;
    user.firstname = req.body.firstname || firstname;
    user.lastname = req.body.lastname || lastname;
    user.phone = req.body.phone || phone;
    user.email = email;
    user.role = role;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } else {
    res.status(400);
    throw new Error("User Not Found!!!");
  }
});

//Admin UPDATE USER
const adminUpdateUser = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const user = await User.findByIdAndUpdate(_id);
  if (user) {
    const { firstname, lastname, email, role, phone } = user;
    user.firstname = req.body.firstname || firstname;
    user.lastname = req.body.lastname || lastname;
    user.phone = req.body.phone || phone;
    user.email = req.body.email || email;
    user.role = req.body.role || role;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      phone: updatedUser.phone,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found!!!");
  }
});

//Get login status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  //verify the authenticity of the token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

//Log the User Out
const logOut = asyncHandler(async (req, res) => {
  //Remove Cookie
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), //current moment
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({
    message: "Successfully Logged out",
  });
});

//Admin Block a user
const adminBlockUser = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  if (_id === null) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  const blockedUser = await User.findByIdAndUpdate(
    _id,
    { isBlocked: true },
    { new: true }
  );
  if (blockedUser) {
    return res.status(200).json({
      message: "User Blocked Succesfully",
    });
  } else {
    return res.status(400).json({
      message: "Failed!!! Please try again",
    });
  }
});

//Admin UnBlock a user
const adminUnBlockUser = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  if (_id === null) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  const blockedUser = await User.findByIdAndUpdate(
    _id,
    { isBlocked: false },
    { new: true }
  );
  if (blockedUser) {
    return res.status(200).json({
      message: "User Un-Blocked Succesfully",
    });
  } else {
    return res.status(400).json({
      message: "Failed!!! Please try again",
    });
  }
});

//HANDLE THE USER`S CART
const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;

  const user = await User.findById(_id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  let products = [];
  //Check if user already have product in Cart
  const alreadyExistInCart = await Cart.findOne({ user: user._id });
  if (alreadyExistInCart) {
    alreadyExistInCart.remove();
  }

  for (let i = 0; i < cart.length; i++) {
    let cartObject = {};
    cartObject.product = cart[i]._id;
    cartObject.count = cart[1].count;
    cartObject.color = cart[i].color;
    let getPrice = await Product.findById(cart[i]._id).select("price").exec();
    cartObject.price = getPrice.price;
    products.push(cartObject);
  }

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  let newCart = await new Cart({
    products,
    cartTotal,
    user: user._id,
  }).save();
  res.status(201).json({ success: true, message: "successful", newCart });
});

//Controller to Empty User`s Cart
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const user = await User.findOne({ _id });
  if (!user) {
    res.status(404);
    throw new Error("User Not Found!!!");
  }
  const myCart = await Cart.findOneAndRemove({ user: user._id });
  if (!myCart) {
    res.status(400);
    throw new Error("Unable to delete cart, Please try again!");
  }
  return res.status(200).json({ success: true, message: "Cart is empty" });
});

//Controller to get User`s Cart
const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const myCart = await Cart.findOne({ user: _id }).populate("products.product");
  if (!myCart) {
    res.status(400);
  }
  return res.status(200).json(myCart);
});

//Controller to apply coupon
const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (!validCoupon) {
    res.status(400);
    throw new Error("Coupon is Invalid, please enter a valid coupon");
  }
  const user = await User.findOne({ _id });
  let { cartTotal } = await Cart.findOne({ user: user._id }).populate(
    "products.product"
  );
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Cart.findOneAndUpdate(
    { user: user._id },
    { totalAfterDiscount },
    { new: true }
  );

  return res.status(200).json(totalAfterDiscount);
});

const createOrder = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { COD, couponApplied } = req.body;
  if (!COD) {
    res.status(400);
    throw new Error("Cash On Delivery failed");
  }
  const user = await User.findById(_id);
  let userCart = await Cart.findOne({ user: user._id });
  let finalAmount = 0;
  if (couponApplied && userCart.totalAfterDiscount) {
    finalAmount = userCart.totalAfterDiscount * 100;
  } else {
    finalAmount = userCart.cartTotal;
  }

  let newOrder = await new Order({
    products: userCart.products,
    paymentIntent: {
      id: uniqid(),
      method: "COD",
      amount: finalAmount,
      status: "Cash On Delivery",
      created: Date.now(),
      currency: "usd",
    },
    user: user._id,
    orderStatus: "Cash On Delivery",
  }).save();
  let update = userCart.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });
  const updated = await Product.bulkWrite(update, {});
  return res.status(200).json({ message: "success" });
});

//Controller to get Orders
const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const userOrders = await Order.findOne({ user: _id }).populate(
    "products.product"
  );
  if (!userOrders) {
    res.status(500);
    throw new Error("Error Retrieving Orders, Please try again");
  }
  return res.status(200).json(userOrders);
});

//Controller to Update Order Status
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const order = await Order.findById(id);
  if (!order) {
    res.status(404);
    throw new Error("Order Not Found!!!");
  }
  const updateOrder = await Order.findByIdAndUpdate(
    { _id: id },
    {
      orderStatus: status,
      paymentIntent: {
        status: status,
      },
    },
    { new: true, runValidators: true }
  );
  if (!updateOrder) {
    res.status(404);
    throw new Error("Order Not Found, Please try again");
  }
  return res.status(200).json(updateOrder);
});

module.exports = {
  registerUser,
  loginUser,
  changeUserPassword,
  getAllUsers,
  getUser,
  getOneParticularUser,
  deleteUser,
  updateUser,
  adminUpdateUser,
  loginStatus,
  logOut,
  adminBlockUser,
  adminUnBlockUser,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
};
