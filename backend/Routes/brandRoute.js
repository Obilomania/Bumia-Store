const express = require("express");
const router = express.Router();
const protect = require("../MiddleWares/authMiddleware");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const { createBrand, getABrand, getAllBrands, updateBrand, deleteBrand } = require("../Controllers/brandController");

router.get("/:_id", getABrand);
router.get("/", getAllBrands);
router.post("/", protect, isAdmin, createBrand);
router.delete("/:_id", protect, isAdmin, deleteBrand);
router.put("/:_id", protect, isAdmin, updateBrand);

module.exports = router;
