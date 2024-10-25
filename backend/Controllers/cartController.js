const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");
const User = require("../Models/userModel");
const Cart = require("../Models/cartModel");

const getCartItems = asyncHandler(async (req, res) => {
  const user = req.user;
  const userId = user._id.toHexString();
  const theUser = await User.findById(userId);
  if (!theUser) {
    return res.status(404).json({ message: "User not found" });
  }
  if (theUser.cart.length === 0 || !theUser.cart) {
    return res.status(400).json({ message: "Cart is Empty" });
  }
  res.status(201).json(theUser.cart);
});

// const addToCart = asyncHandler(async (req, res) => {
//   const { cart } = req.body;
//   console.log(cart)
//   const user = req.user;
//   const userId = user._id.toHexString();
//   try {
//     let products = [];
//     const alreadyExistInCart = await Cart.findOne({ userId });
//     if (alreadyExistInCart) {
//       alreadyExistInCart.remove();
//     }
//     for (let i = 0; i < cart.length; i++) {
//       let cartObject = {};
//       cartObject.product = cart[i]._id;
//       cartObject.count = cart[1].count;
//       let getPrice = await Product.findById(cart[i]._id).select("price").exec();
//       cartObject.price = getPrice.price;
//       products.push(cartObject);
//     }
//     let cartTotal = 0;
//     for (let i = 0; i < products.length; i++) {
//       cartTotal = cartTotal + products[i].price * products[i].count;
//     }
//     let newCart = await new Cart({
//       user: userId,
//       products,
//       cartTotal,
//     }).save();

//     return res.status(200).json(newCart);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

const addToCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { product, count } = cart;
  const user = req.user;
  const existingProductIndex = user.cart.findIndex(
    (item) => item.product.toString() === product
  );
  if (existingProductIndex !== -1) {
    // If product exists, update its count by adding the new count
    user.cart[existingProductIndex].count += count;
  } else {
    user.cart.push(cart);
  }
  await user.save();

  res.status(201).json(user.cart);
});

// const increaseCartItemCount = asyncHandler(async (req, res) => {
//   const { id: productId } = req.params;
//   const { count } = req.body;
//   const user = req.user;
//   const userId = user._id.toHexString();
//   const theUser = await User.findById(userId);
//   const theUserCart = theUser.cart;
//   const theProductToIncrease = theUserCart.find(
//     (item) => item._id === productId
//   );
//   if (!theProductToIncrease) {
//     return res.status(404).json({ message: "Product Not Found" });
//   }
//   theProductToIncrease.count += count;
//   await theUser.save();
//   return res.status(200).json({ success: true, message: "Cart Updated" });
// });

// const decreaseCartItemCount = asyncHandler(async (req, res) => {});

const emptyTheCart = asyncHandler(async (req, res) => {
  const user = req.user; // Assuming req.user is populated with the user's data
  try {
    user.cart = [];
    await user.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Cart cleared successfully",
        cart: user.cart,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error clearing cart", error });
  }
});


// const updateCartItemQuantity = asyncHandler(async (req, res) => {
//   const { productId, quantity } = req.body;
//   const user = req.user;
//   const userId = user._id.toHexString();
//   const cart = await Cart.findOne({ userId });
//   console.log("cart", cart);
// });
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
  emptyTheCart
};
