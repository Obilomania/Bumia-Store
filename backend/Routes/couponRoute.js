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
  getCoupon,
  validateCoupon,
} = require("../Controllers/couponController");

router.post("/", protect, isAdmin, createCoupon);
router.get("/:_id", protect, isAdmin, getSingleCoupon);
router.get("/", protect, isAdmin, getAllCoupon);
router.put("/:_id", protect, isAdmin, updateCoupon);
router.delete("/:_id", protect, isAdmin, deleteCoupon);


router.get("/getcoupon", protect, getCoupon);
router.get("/validate", protect, validateCoupon);



module.exports = router;
