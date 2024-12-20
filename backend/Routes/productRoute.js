const express = require("express");
const router = express.Router();
const protect = require("../MiddleWares/authMiddleware");
const isAdmin = require("../Middlewares/isAdminMiddlere");
const {
  createProduct,
  getAllProducts,
  getAProduct,
  deleteProduct,
  updateProduct,
  addToWishList,
  productRating,
  uploadImages,
  deleteProductImage,
  getRecommendedProducts,
  getFeaturedProducts,
  getProductsByCategory,
  makeProductFeatured,
  deletePhoto,
} = require("../Controllers/productController");
const {
  imageSizeResize,
  uploadPhoto,
} = require("../Middlewares/uploadImagesMiddleware");

router.get("/:_id", getAProduct);
router.put("/wishlist", protect, addToWishList);
router.put("/rating", protect, productRating);
router.get("/", getAllProducts);
router.get("/recommendations", getRecommendedProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.put("/featured/:_id", makeProductFeatured);
router.post(
  "/create-product",
  protect,
  isAdmin,
  uploadPhoto.array("images", 5),
  createProduct
);
router.delete("/:_id", protect, isAdmin, deleteProduct);
router.put(
  "/:_id",
  protect,
  isAdmin,
  uploadPhoto.array("images", 5),
  updateProduct
);
router.put(
  "/upload/:_id",
  protect,
  isAdmin,
  uploadPhoto.array("images", 5),
  uploadImages
);

router.delete("/:prodId/images/:imageId", protect, isAdmin, deleteProductImage);

module.exports = router;
