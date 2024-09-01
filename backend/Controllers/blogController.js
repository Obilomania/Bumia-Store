const asyncHandler = require("express-async-handler")
const Blog = require("../Models/blogModel")
const User = require("../Models/userModel");


const createBlogPost = asyncHandler(async (req, res) => {
    
})


module.exports = {
    createBlogPost,
}