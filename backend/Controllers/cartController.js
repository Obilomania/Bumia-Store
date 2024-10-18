const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");
const User = require("../Models/userModel");
const Cart = require("../Models/cartModel");

const getCartItems = asyncHandler(async (req, res) => {
  const user = req.user;
  const userId = user._id.toHexString();
  const cart = await Cart.findOne({ user }).populate("products.product");
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  return res.status(200).json(cart);
});

const addToCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const user = req.user;
  const userId = user._id.toHexString();
  try {
    let products = [];
    const alreadyExistInCart = await Cart.findOne({ userId });
    if (alreadyExistInCart) {
      alreadyExistInCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let cartObject = {};
      cartObject.product = cart[i]._id;
      cartObject.count = cart[1].count;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      cartObject.price = getPrice.price;
      products.push(cartObject);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new Cart({
      user: userId,
      products,
      cartTotal,
    }).save();

    return res.status(200).json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

const emptyTheCart = asyncHandler(async (req, res) => {
  const {_id} = req.user
  // const userId = user._id.toHexString();
  const theUser = await User.findOne({ _id });
  if (!theUser) {
    res.status(404);
    throw new Error("User Not Found!!!");
  }
  console.log("theUser", theUser);
  const myCart = await Cart.findOneAndRemove({user:theUser._id });
  if (!myCart) {
    res.status(400);
    throw new Error("Unable to delete cart, Please try again!");
  }
  return res.status(200).json({ success: true, message: "Cart is empty" });
});





const updateCartItemQuantity = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const user = req.user;
  const userId = user._id.toHexString();
  const cart = await Cart.findOne({ userId });
  console.log("cart", cart);
});
// const updateCartItemQuantity = asyncHandler(async (req, res) => {
//   const { id: productId } = req.params;
//   const { quantity } = req.body;
//   const user = req.user;
//   const existingItem = user.cart.find((item) => item.id === productId);
//   if (existingItem) {
//     if (quantity === 0) {
//       user.cart = user.cart.filter((item) => item.id !== productId);
//       await user.save();
//       return res.json(user.cart);
//     }
//     existingItem.quantity = quantity;
//     await user.save();
//     return res.json(user.cart);
//   } else {
//     res.status(404).json({ message: "Product not found" });
//   }
// });

module.exports = {
  getCartItems,
  addToCart,
  emptyTheCart,
  updateCartItemQuantity,
};
