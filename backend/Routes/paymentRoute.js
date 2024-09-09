const express = require("express");
const { createCheckOutSession, checkoutSuccess } = require("../Controllers/paymentController");
const protect = require("../MiddleWares/authMiddleware");
const router = express.Router();





router.post("/create-checkout-session", protect, createCheckOutSession);
router.post("/checkout-success", protect, checkoutSuccess);








module.exports = router;
