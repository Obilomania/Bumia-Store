const express = require("express");
const router = express.Router();
const protect = require("../MiddleWares/authMiddleware");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const { getACategory, getAllCategories, createCategory, deleteCategory, updateCategory } = require("../Controllers/categoryController");


router.get("/:_id", getACategory);
router.get("/", getAllCategories);
router.post("/", protect, isAdmin, createCategory);
router.delete("/:_id", protect, isAdmin, deleteCategory);
router.put("/:_id", protect, isAdmin, updateCategory);

module.exports = router;
