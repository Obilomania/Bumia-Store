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
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  changeUserPassword,
} = require("../Controllers/userController");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const protect = require("../MiddleWares/authMiddleware");
const { createAddress, getAddress, updateAddress } = require("../Controllers/addressController");
const router = express.Router();





//Authentication
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/changepassword", protect, changeUserPassword);
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


//**********************ADDRESSSSSSSSSSSSSSS */
router.post("/address", protect, createAddress);
router.patch("/address/:id", protect, updateAddress);
router.get("/address/:id", protect, getAddress);


module.exports = router;
