const asyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify");
const Category = require("../Models/categoryModel");

//Create a Category
const createCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const titleExist = await Category.findOne({ title })
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
  const category = await Category.findById(req.params._id);
  if (category) {
    const { title } = req.body;
    category.title = req.body.title || title;

    const updatedCategory = await category.save();
    res.status(200).json({
      _id: updatedCategory._id,
      title: updatedCategory.title,
    });
  } else {
    res.status(404);
    throw new Error("Category Not Found!!!");
  }
});

//Delete a Category
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params._id);
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
