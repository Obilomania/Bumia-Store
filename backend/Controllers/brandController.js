const asyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify");
const Brand = require("../Models/brandModel");

//Create a Brand
const createBrand = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const titleExist = await Brand.findOne({ title });
  if (titleExist) {
    res.status(400);
    throw new Error("Title already exists");
  }
  const brand = await Brand.create({ title });
  if (!brand) {
    res.status(500);
    throw new Error("Brand could not be created");
  } else {
    res.status(201).json(brand);
  }
});

//Get a Brand
const getABrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params._id);
  if (!brand) {
    res.status(404);
    throw new Error("Brand Not Found!!!");
  }
  res.status(200).json(brand);
});

//Get All Categories
const getAllBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find().sort("-createdAt");
  if (!brands) {
    throw new Error("Error fetching Categories, please try again later");
  }
  res.status(200).json(brands);
});

//Update a Brand
const updateBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params._id);
  if (brand) {
    const { title } = req.body;
    brand.title = req.body.title || title;

    const updatedBrand = await brand.save();
    res.status(200).json({
      _id: updatedBrand._id,
      title: updatedBrand.title,
    });
  } else {
    res.status(404);
    throw new Error("Brand Not Found!!!");
  }
});

//Delete a Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findByIdAndDelete(req.params._id);
  if (!brand) {
    res.status(404);
    throw new Error("Brand Not Found!!!");
  }
  res.status(200).json({ message: "Brand deleted successfully" });
});

module.exports = {
  createBrand,
  getABrand,
  getAllBrands,
  updateBrand,
  deleteBrand,
};
