const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.user;
    const adminUser = await User.findOne({ email });
    if (adminUser.role !== "Admin") {
         res.status(401);
         throw new Error("You are not authorized, To perform Operation");
    } else {
        req.user = adminUser;
        next();
    }
});


module.exports = isAdmin