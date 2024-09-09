const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");
const User = require("../Models/userModel");

const getCartItems = asyncHandler(async (req, res) => {
  const products = await Product.find({ _id: { $in: req.user.cart } });

  const cartItems = products.map((product) => {
    const item = req.user.cart.find(
      (item) => item.id === product._id.toString()
    );
    return { ...product.toJson(), quantity: item.quantity };
  });
  return res.status(200).json(cartItems);
});

const addToCart = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const user = req.user;

  const itemExist = user.cart.find((item) => item.id === productId);
  if (itemExist) {
    if (itemExist.quantity === 0) {
      user.cart = user.cart.filter((item) => item.id !== productId);
      await user.save();
      return res.json(user.cartItems);
    }
    itemExist.quantity = quantity;
    await user.save();
    return res.json(user.cartItems);
  }
});

const emptyTheCart = asyncHandler(async (req, res) => {
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

const updateCartItemQuantity = asyncHandler(async (req, res) => {
  const { id: productId } = req.params;
  const { quantity } = req.body;
  const user = req.user;
  const existingItem = user.cart.find((item) => item.id === productId);
  if (existingItem) {
    if (quantity === 0) {
      user.cart = user.cart.filter((item) => item.id !== productId);
      await user.save();
      return res.json(user.cart);
    }
    existingItem.quantity = quantity;
    await user.save();
    return res.json(user.cart);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = {
  getCartItems,
  addToCart,
  emptyTheCart,
  updateCartItemQuantity,
};
