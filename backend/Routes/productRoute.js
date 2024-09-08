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
} = require("../Controllers/productController");
const {
    imageSizeResize,
    uploadPhoto,
} = require("../Middlewares/uploadImagesMiddleware");

router.get("/:_id", getAProduct);
router.put("/wishlist", protect, addToWishList);
router.put("/rating", protect, productRating);
router.get("/", getAllProducts);
router.post(
  "/",
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

module.exports = router;
