const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");
const { default: slugify } = require("slugify");
const User = require("../Models/userModel");
const multer = require("multer");
const { fileSizeFormatter } = require("../Config/fileUpload");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
// const { redisClient } = require("../Config/redis");

//Create a product
const createProduct = asyncHandler(async (req, res) => {
  const { title, description, slug, price, category, brand, quantity, color } =
    req.body;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }

  const productExist = await Product.findOne({ title });
  if (productExist) {
    res.status(400);
    throw new Error("Product already exists");
  }
  let images = [];
  let imagePath = [];
  const files = req.files;

  try {
    for (const file of files) {
      uploadedFile = await cloudinary.uploader.upload(file.path, {
        folder: "Bumia Store",
        resource_type: "image",
      });
      imagePath.push({
        url: uploadedFile.secure_url,
        public_id: uploadedFile.public_id,
      });
      fs.unlinkSync(file.path);
    }
    imagePath.forEach((imgPath) => {
      images.push(imgPath);
    });
  } catch (error) {
    res.status(500);
    throw new Error("Image could not be uploaded");
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
    images,
  });
  if (product) {
    return res.status(200).json({ success: true, product });
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

//GET FEATURED PRODUCTS
const getFeaturedProducts = asyncHandler(async (req, res) => {
  let featuredProducts = await redisClient.get("featured_products");
  if (featuredProducts) {
    return res.json(JSON.parse(featuredProducts));
  }

  //if not in redis fetch from MongoDb
  featuredProducts = await Product.find({
    isFeatured: true,
  }).lean();
  if (!featuredProducts) {
    return res.status(404).json({ message: "No featured products found" });
  }

  //store in redis for future quick access
  await redisClient.set("featured_products", JSON.stringify(featuredProducts));
  res.json(featuredProducts);
});

//GET RECOMMENDED PRODUCTS
const getRecommendedProducts = asyncHandler(async (req, res) => {
  try {
    const recommendedProducts = await Product.aggregate([
      { $sample: { size: 6 } },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          image: 1,
          price: 1,
          discountPrice: 1,
        },
      },
    ]);
    res.json(products);
  } catch (error) {
    console.log("Error in getRecommendedProducts controller", error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

//GET PRODUCTS BY CATEGORY
const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  if (!products) {
    return res.status(404).json({ message: "No products found" });
  }
  res.json(products);
});

//MAKE A PRODUCT FEATURED
async function updateFeaturedProductsCache() {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redisClient.set(
      "featured_products",
      JSON.stringify(featuredProducts),
      "EX",
      60 * 60 * 24
    );
  } catch (error) {
    console.log("Error in updating cache");
  }
}
const makeProductFeatured = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const product = await Product.findById(_id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.isFeatured = true;
  await updateFeaturedProductsCache();
  await product.save();
  res.json(product);
});

//Update a Product
const updateProduct = asyncHandler(async (req, res) => {
  const { title, description, slug, price, category, brand, quantity, color } =
    req.body;
  const { _id } = req.params;
  const product = await Product.findById(_id);
  if (!product) {
    res.status(404);
    throw new Error("Product Not Found!!!");
  }

  let someImages = [];
  let imagePath = [];
  const files = req.files;
  try {
    for (const file of files) {
      uploadedFile = await cloudinary.uploader.upload(file.path, {
        folder: "Bumia Store",
        resource_type: "image",
      });
      imagePath.push({
        url: uploadedFile.secure_url,
        public_id: uploadedFile.public_id,
      });
      fs.unlinkSync(file.path);
    }
    imagePath.forEach((imgPath) => {
      someImages.push(imgPath);
    });
  } catch (error) {
    res.status(500);
    throw new Error("Image could not be uploaded");
  }

  someImages.push(...product.images);
  

  const updateProduct = await Product.findByIdAndUpdate(
    { _id },
    {
      title,
      description,
      slug,
      price,
      category,
      brand,
      quantity,
      color,
      images:
        Object.keys(someImages).length === 0 ? product.images : someImages,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (updateProduct) {
    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      data: updateProduct,
    });
  } else {
    res.status(400);
    throw new Error("Product Not Found!!!");
  }
});

//Delete a Product
const deleteProduct = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const product = await Product.findById(_id);
  product.images.forEach(async (img) => {
    await cloudinary.uploader.destroy(img.public_id);
  });

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
  let imagePath = [];
  const files = req.files;
  for (const file of files) {
    uploadedFile = await cloudinary.uploader.upload(file.path, {
      folder: "Bumia Store",
      resource_type: "image",
    });
    imagePath.push({ url: uploadedFile.secure_url });
    fs.unlinkSync(file.path);
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
  } else {
    res.status(500);
    throw new Error("Image could not be uploaded");
  }
});

const deleteProductImage = asyncHandler(async (req, res) => {
  try {
    const { prodId, imageId } = req.params;
    const product = await Product.findById(prodId);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    const imageToDelete = product.images.find(
      (img) => img._id.toString() === imageId
    );
    if (!imageToDelete)
      return res
        .status(404)
        .json({ success: false, message: "Image not found" });

    await cloudinary.uploader.destroy(imageToDelete.public_id);

    await Product.findByIdAndUpdate(prodId, {
      $pull: { images: { _id: imageId } }, // Remove the image with the matching _id from the array
    });
    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
    return res.status(200).json({ success: true, user });
  }
});

//Product Rating
const productRating = asyncHandler(async (req, res) => {});

module.exports = {
  createProduct,
  getAProduct,
  getAllProducts,
  getFeaturedProducts,
  getRecommendedProducts,
  getProductsByCategory,
  makeProductFeatured,
  updateProduct,
  deleteProduct,
  uploadImages,
  addToWishList,
  productRating,
  deleteProductImage,
};
