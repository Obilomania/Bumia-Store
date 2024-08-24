const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};
const cloudinaryUploadImage = async (imagePath) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(imagePath, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};

module.exports = cloudinaryUploadImage;
