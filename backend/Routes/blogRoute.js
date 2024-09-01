const express = require("express");
const { createBlogPost } = require("../Controllers/blogController");
const router = express.Router();



router.post("/", protect, isAdmin, createBlogPost);


module.exports = router;