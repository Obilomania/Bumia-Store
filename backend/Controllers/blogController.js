const asyncHandler = require("express-async-handler");
const Blog = require("../Models/blogModel");
const User = require("../Models/userModel");

// ********************CREATE BLOG POST************************************
const createBlogPost = asyncHandler(async (req, res) => {
  const { title, description, category } = req.body;
  if (!title || !description || !category) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const newBlogPost = await Blog.create(req.body);
  return res.status(200).json({ success: true, newBlogPost });
});

// *******************************UPDATE BLOG POST********************************

const updateBlogPost = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    return res
      .status(404)
      .json({ success: false, message: "Unable to retieve post" });
  }

  const updatedPost = await Blog.findByIdAndUpdate(
    _id,
    {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedPost) {
    return res
      .status(400)
      .json({ success: false, message: "Error updating Post" });
  }
  return res.status(200).json({ success: true, updatedPost });
});

//***********************************GET A SINGLE BLOG POST**************************
const getSinglePost = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const updatedPost = await Blog.findByIdAndUpdate(
    _id,
    { $inc: { numViews: 1 } }, // Increment numViews by 1
    { new: true } // Return the updated document
  );

  if (!updatedPost) {
    return res
      .status(404)
      .json({ success: false, message: "Blog post not found" });
  }
  return res.status(201).json({ success: true, updatedPost });
});

// **************GET ALL BLOG POST**********************$incc
const getAllBlogPosts = asyncHandler(async (req, res) => {
  const allPost = await Blog.find();
  if (!allPost) {
    return res
      .status(404)
      .json({
        success: false,
        message: "Unable to retreive post, Please try again",
      });
  }
  return res.status(200).json({ success: true, allPost });
});

module.exports = {
  createBlogPost,
  updateBlogPost,
  getSinglePost,
  getAllBlogPosts,
};
