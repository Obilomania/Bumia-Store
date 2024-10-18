  const express = require("express");
const router = express.Router();
const protect = require("../MiddleWares/authMiddleware");
const { addToCart, emptyTheCart, updateCartItemQuantity, getCartItems } = require("../Controllers/cartController");

router.get("/", protect, getCartItems);
router.post("/", protect, addToCart);
router.delete("/", protect, emptyTheCart);
router.put("/:id", protect, updateCartItemQuantity);

module.exports = router;
  