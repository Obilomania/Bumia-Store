 const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  getOneParticularUser,
  deleteUser,
  updateUser,
  adminUpdateUser,
  loginStatus,
  logOut,
  getUser,
  adminBlockUser,
  adminUnBlockUser,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../Controllers/userController");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const protect = require("../MiddleWares/authMiddleware");
const router = express.Router();


//Cart Routes
router.post("/cart", protect, userCart);
router.delete("/emptycart", protect, emptyCart);
router.get("/mycart", protect, getUserCart);


//Authentication
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logOut);
router.get("/login-status", loginStatus);
router.get("/getuser", protect, getUser);
router.delete("/:id", deleteUser);
router.patch("/updateuser", protect, updateUser);
router.get("/alluser", protect, isAdmin, getAllUsers);
router.get("/:_id", protect, isAdmin, getOneParticularUser);
router.patch("/admin-user-update/:_id", protect, isAdmin, adminUpdateUser);
router.patch("/block-user/:_id", protect, isAdmin, adminBlockUser);
router.patch("/unblock-user/:_id", protect, isAdmin, adminUnBlockUser);


//Coupon Routes
router.post("/cart/apply-coupon", protect, applyCoupon);

//Order Route
router.post("/orders/cash-order", protect, createOrder);
router.get("/orders/get-order", protect, getOrders);
router.put("/orders/update-order/:id", protect, isAdmin, updateOrderStatus);

module.exports = router;
