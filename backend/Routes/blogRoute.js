const express = require("express");
const {
  createBlogPost,
  updateBlogPost,
  getSinglePost,
  getAllBlogPosts,
} = require("../Controllers/blogController");
const protect = require("../MiddleWares/authMiddleware");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const router = express.Router();



router.post("/create", protect, isAdmin, createBlogPost);
router.put("/edit-blog-post/:_id", protect, isAdmin, updateBlogPost);
router.get("/single-post/:_id", getSinglePost);
router.get("/get-all-post", getAllBlogPosts);


module.exports = router;