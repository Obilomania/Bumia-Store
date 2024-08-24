const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");
const { default: slugify } = require("slugify");
const User = require("../Models/userModel");
const multer = require("multer");
const { fileSizeFormatter } = require("../Config/fileUpload");
const cloudinary = require("cloudinary").v2;
const fs = require("fs")

//Create a product
const createProduct = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    slug,
    price,
    category,
    brand,
    quantity,
    color,
  } = req.body;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  const productExist = await Product.findOne({ title });
  if (productExist) {
    res.status(400);
    throw new Error("Product already exists");
  }
  const product = await Product.create({
    title,
    description,
    slug,
    price,
    category,
    brand,
    quantity,
    color,
  });
  if (product) {
    res.status(201).json(product);
  } else {
    res.status(500);
    throw new Error("Error Creating Product, Please try again");
  }
});

//Get a Product
const getAProduct = asyncHandler(async (req, res) => {
  const singleProduct = await Product.findById(req.params._id);
  if (!singleProduct) {
    res.status(404);
    throw new Error("Product Not Found!!!");
  }
  res.status(200).json(singleProduct);
});

//Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find().sort("-createdAt");
  if (allProducts) {
    res.status(200).json(allProducts);
  } else {
    res.status(500);
    throw new Error("Could not Retrieve Products, Please try again");
  }
});

//Update a Product
const updateProduct = asyncHandler(async (req, res) => {
  const singleProduct = await Product.findById(req.params._id);
  if (singleProduct) {
    const {
      title,
      description,
      slug,
      price,
      category,
      brand,
      quantity,
      images,
      color,
    } = singleProduct;
    singleProduct.title = req.body.title || title;
    singleProduct.description = req.body.description || description;
    singleProduct.slug = req.body.title || slug;
    singleProduct.price = req.body.price || price;
    singleProduct.category = req.body.category || category;
    singleProduct.brand = req.body.brand || brand;
    singleProduct.quantity = req.body.quantity || quantity;
    singleProduct.images = req.body.images || images;
    singleProduct.color = req.body.color || color;

    const updatedProduct = await singleProduct.save();
    if (updatedProduct) {
      res.status(200).json({
        _id: updatedProduct._id,
        title: updatedProduct.title,
        description: updatedProduct.description,
        slug: updatedProduct.slug,
        price: updatedProduct.price,
        category: updatedProduct.category,
        brand: updatedProduct.brand,
        quantity: updatedProduct.quantity,
        images: updatedProduct.images,
        color: updatedProduct.color,
      });
    } else {
      res.status(400);
      throw new Error("Product Not Found!!!");
    }
  }
});

//Delete a Product
const deleteProduct = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const theProduct = await Product.findByIdAndDelete(_id);
  if (!theProduct) {
    res.status(404);
    throw new Error("Product Not Found!!!");
  } else {
    res.status(200).json({ message: "Product has been deleted" });
  }
});

//Upload Images
const uploadImages = asyncHandler(async (req, res) => {
  // console.log(req.files);
  let imagePath = [];
  const files = req.files;
  for (const file of files) {
    uploadedFile = await cloudinary.uploader.upload(file.path, {
      folder: "Super Store",
      resource_type: "image",
    });
    imagePath.push({ url: uploadedFile.secure_url });
    fs.unlinkSync(file.path)
  }
  const product = await Product.findByIdAndUpdate(
    req.params._id,
    {
      images: imagePath.map((file) => {
        return file;
      }),
    },
    { new: true, runValidators: true }
  );
  if (product) {
    res.status(200).json(product);
  }
  else {
    res.status(500);
    throw new Error("Image could not be uploaded");
  }
});

//Add Product to wishList
const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;

  const user = await User.findById(_id);
  const alreadyAdded = user.wishList.find((id) => id.toString() === prodId);
  if (alreadyAdded) {
    let user = await User.findByIdAndUpdate(
      _id,
      { $pull: { wishList: prodId } },
      { new: true }
    );
    res.json(user);
  } else {
    let user = await User.findByIdAndUpdate(
      _id,
      { $push: { wishList: prodId } },
      { new: true }
    );
    res.json(user);
  }
});

//Product Rating
const productRating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId } = req.body;
  const product = await Product.findById(prodId);
  let productRated = product.ratings.find(
    (userId) => userId.postedby.toString() === _id.toString
  );
  if (productRated) {
    const updateRating = await Product.updateOne(
      {
        ratings: { $elemMatch: alreadyRated },
      },
      { $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
      { new: true }
    );
  } else {
    const ratedProduct = await Product.findByIdAndUpdate(
      prodId,
      { $push: { ratings: { star: star, comment: comment, postedby: _id } } },
      { new: true }
    );
  }
  const getAllRatings = await Product.findById(prodId);
  let totalRating = getAllRatings.ratings.length;
  let sumAllRatings = getAllRatings.ratings
    .map((item) => item.star)
    .reduce((prev, cur) => prev + cur, 0);
  let actualRating = math.round(sumAllRatings / totalRating);
  let finalProductRating = await Product.findByIdAndUpdate(
    prodId,
    { totalRating: actualRating },
    { new: true }
  );
  res.json(finalProductRating);
});

module.exports = {
  createProduct,
  getAProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  uploadImages,
  addToWishList,
  productRating,
};
