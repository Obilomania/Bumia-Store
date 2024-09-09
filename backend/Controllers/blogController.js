const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const Blog = require("../Models/blogModel");

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
    return res.status(404).json({
      success: false,
      message: "Unable to retreive post, Please try again",
    });
  }
  return res.status(200).json({ success: true, allPost });
});

// **************DELETE POST**********************$incc
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

// **************LIKE POST**********************$incc
const likeBlogPost = asyncHandler(async (req, res) => {
    const { postId } = req.body;
  const blogPost = await Blog.findById(postId);
  const loggedInUserId = req?.user?._id;
  const isLiked = blogPost.isLiked;
  const alreadyDisLiked = blogPost.disLikes?.find(
    (userId) => userId.toString() === loggedInUserId?.toString()
  );
  if (alreadyDisLiked) {
    const blogPost = await Blog.findByIdAndUpdate(
      postId,
      {
        $pull: { disLikes: loggedInUserId },
        isDisliked: false,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ success: true, blogPost });
  }
  if (isLiked) {
    const blogPost = await Blog.findByIdAndUpdate(
      postId,
      {
        $pull: { likes: loggedInUserId },
        isLiked: false,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ success: true, blogPost });
    }
    else{
        const blogPost = await Blog.findByIdAndUpdate(
          postId,
          {
            $push: { likes: loggedInUserId },
            isLiked: true,
          },
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(201).json({ success: true, blogPost });
    }
});


// **************DIS-LIKE POST**********************$incc
const disLikeBlogPost = asyncHandler(async (req, res) => {
    const { postId } = req.body;
  const blogPost = await Blog.findById(postId);
  const loggedInUserId = req?.user?._id;
  const isDisliked  = blogPost?.isDisliked ;
  const alreadyLiked = blogPost.likes?.find(
    (userId) => userId.toString() === loggedInUserId?.toString()
  );
  if (alreadyLiked) {
    const blogPost = await Blog.findByIdAndUpdate(
      postId,
      {
        $pull: { likes: loggedInUserId },
        isLiked: false,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ success: true, blogPost });
  }
  if (isDisliked) {
    const blogPost = await Blog.findByIdAndUpdate(
      postId,
      {
        $pull: { disLikes: loggedInUserId },
        isDisliked: false,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ success: true, blogPost });
  } else {
    const blogPost = await Blog.findByIdAndUpdate(
      postId,
      {
        $push: { disLikes: loggedInUserId },
        isDisliked: true,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ success: true, blogPost });
  }
});

module.exports = {
  createBlogPost,
  updateBlogPost,
  getSinglePost,
  getAllBlogPosts,
  deleteBlogPost,
  likeBlogPost,
  disLikeBlogPost,
};
