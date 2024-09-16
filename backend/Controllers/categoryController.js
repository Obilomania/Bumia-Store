const asyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify");
const Category = require("../Models/categoryModel");

//Create a Category
const createCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const titleExist = await Category.findOne({ title });
  if (titleExist) {
    res.status(400);
    throw new Error("Title already exists");
  }
  const category = await Category.create({ title });
  if (!category) {
    res.status(500);
    throw new Error("Category could not be created");
  } else {
    res.status(201).json(category);
  }
});

//Get a Category
const getACategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params._id);
  if (!category) {
    res.status(404);
    throw new Error("Category Not Found!!!");
  }
  res.status(200).json(category);
});

//Get All Categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort("-createdAt");
  if (!categories) {
    throw new Error("Error fetching Categories, please try again later");
  }
  res.status(200).json(categories);
});

//Update a Category
const updateCategory = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    return res
      .status(404)
      .json({ success: false, message: "Unable to retrieve Category" });
  }
  const updateCategory = await Category.findByIdAndUpdate(
    { _id },
    {
      title: req.body.title,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updateCategory) {
    return res
      .status(400)
      .json({ success: false, message: "Error Updating Category" });
  }
  return res.status(200).json({ success: true, updateCategory });
});

//Delete a Category
const deleteCategory = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  console.log(_id)
  if (!_id) {
    return res
      .status(404)
      .json({ success: false, message: "Unable to retrieve Category" });
  }
  const category = await Category.findByIdAndDelete(_id);
  if (!category) {
    res.status(404);
    throw new Error("Category Not Found!!!");
  }
  res.status(200).json({ message: "Category deleted successfully" });
});

module.exports = {
  createCategory,
  getACategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
