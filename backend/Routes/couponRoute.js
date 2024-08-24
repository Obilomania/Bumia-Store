const express = require("express");
const router = express.Router();
const protect = require("../MiddleWares/authMiddleware");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const {
  createCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
  getSingleCoupon,
} = require("../Controllers/couponController");

router.post("/", protect, isAdmin, createCoupon);
router.get("/:_id", protect, isAdmin, getSingleCoupon);
router.get("/", protect, isAdmin, getAllCoupon);
router.put("/:_id", protect, isAdmin, updateCoupon);
router.delete("/:_id", protect, isAdmin, deleteCoupon);

module.exports = router;
