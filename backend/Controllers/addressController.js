const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const Address = require("../Models/addressModel");

// ********************CREATE ADDRESS************************************
const createAddress = asyncHandler(async (req, res) => {
  const { address, localGovernmentArea, state, zipCode } = req.body;
  if (!address || !localGovernmentArea || !state) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const newAddress = await Address.create({
    user: req.user._id,
    address,
    localGovernmentArea,
    state,
    zipCode,
  });
  if (newAddress) {
    return res.status(200).json({ success: true, newAddress });
  } else {
    res.status(400);
    throw new Error("Error, Try again Later");
  }
});

// *******************************UPDATE ADDRESS********************************

const updateAddress = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    return res
      .status(404)
      .json({ success: false, message: "Unable to retrieve post" });
  }

  const updateAddress = await Address.findByIdAndUpdate(
    _id,
    {
      address: req.body.address,
      localGovernmentArea: req.body.localGovernmentArea,
      state: req.body.state,
      zipcode: req.body.zipcode,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedPost) {
    return res
      .status(400)
      .json({ success: false, message: "Error updating Address" });
  }
  return res.status(200).json({ success: true, updateAddress });
});

//***********************************GET ADDRESS**************************
const getAddress = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const userAddress = await Address.findById(_id);

  if (!userAddress) {
    return res
      .status(404)
      .json({ success: false, message: "Address not found" });
  }
  return res.status(201).json({ success: true, userAddress });
});

module.exports = {
  createAddress,
  updateAddress,
  getAddress,
};
