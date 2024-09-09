const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");


// ********************CREATE ADDRESS************************************
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

// *******************************UPDATE ADDRESS********************************

const updateBlogPost = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    return res
      .status(404)
      .json({ success: false, message: "Unable to retrieve post" });
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

//***********************************GET A ADDRESS**************************
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

// **************GET ADDRESS**********************$incc
const getAllBlogPosts = asyncHandler(async (req, res) => {
  const allPost = await Blog.find();
  if (!allPost) {
    return res.status(404).json({
      success: false,
      message: "Unable to retreive post, Please try again",
    });
  }
  return res.status(200).json({ success: true, allPost });
});

// **************DELETE ADDRESS**********************$incc
const deleteBlogPost = asyncHandler(async (req, res) => {
  const onePost = await Blog.findByIdAndDelete(req.params._id);
  if (!onePost) {
    return res.status(404).json({
      success: false,
      message: "Unable to delete post, Please try again",
    });
  }
  return res
    .status(200)
    .json({ success: true, message: "Post deleted successfully" });
});


module.exports = {
    
}
