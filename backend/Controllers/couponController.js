const asyncHandler = require("express-async-handler");
const Coupon = require("../Models/couponModel");
Coupon;

//Create Coupon
const createCoupon = asyncHandler(async (req, res) => {
  const { name, discount, expiry } = req.body;
  //Validation
  if (!name || !discount || !expiry) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  //Check if Coupon already exist
  const couponExists = await Coupon.findOne({ name });
  if (couponExists) {
    res.status(400);
    throw new Error("Coupon already exists");
  }
  const newCoupon = await Coupon.create({
    name,
    expiry,
    discount,
  });
  res.status(201).json(newCoupon);
});

const getCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findOne({ userId: req.body, isActive: true });
  if (!coupon) {
    res.status(404);
    throw new Error("Coupon Not Found!!!");
  }
  res.json({ success: true, coupon });
});

const validateCoupon = asyncHandler(async (req, res) => {
  const { code } = req.body;
  const coupon = await Coupon.findOne({
    name: code,
    userId: req.user._id,
    isActive: true,
  });
  if (!coupon) {
    res.status(404);
    throw new Error("Coupon Not Found!!!");
  }
  if (coupon.expiry < new Date()) {
    coupon.isActive = false;
    await coupon.save();
    return res.status(400).json({ success: false, message: "Coupon Expired" });
  }
  res.json({
    success: true,
    name: coupon.name,
    discountPercentage: coupon.discountPercentage,
    message: "Coupon is Valid",
  });
});

//Get all coupons
const getAllCoupon = asyncHandler(async (req, res) => {
  const allCoupon = await Coupon.find().sort("-createdAt");
  if (allCoupon) {
    res.status(200).json(allCoupon);
  } else {
    res.status(500);
    throw new Error("Could not Retrieve Coupons, Please try again");
  }
});

//Get A Coupon
const getSingleCoupon = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const coupon = await Coupon.findById(_id);
  if (!coupon) {
    res.status(404);
    throw new Error("Coupon Not Found!!!");
  } else {
    res.status(200).json(coupon);
  }
});

//Update Coupon
const updateCoupon = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const coupon = await Coupon.findByIdAndUpdate(_id);
  if (coupon) {
    const { name, expiry, discount } = coupon;
    coupon.name = req.body.name || name;
    coupon.expiry = req.body.expiry || expiry;
    coupon.discount = req.body.discount || discount;

    const updateCoupon = await coupon.save();
    res.status(200).json({
      _id: updateCoupon._id,
      name: updateCoupon.name,
      expiry: updateCoupon.expiry,
      discount: updateCoupon.discount,
    });
  } else {
    res.status(400);
    throw new Error("Coupon Not Found!!!");
  }
});

//Delete Coupon
const deleteCoupon = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const coupon = await Coupon.findByIdAndDelete(_id);
  if (!coupon) {
    res.status(404);
    throw new Error("Coupon Not Found!!!");
  } else {
    res.status(200).json({ message: "Coupon has been deleted" });
  }
});

module.exports = {
  createCoupon,
  getCoupon,
  validateCoupon,
  getAllCoupon,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
};
