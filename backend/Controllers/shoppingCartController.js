const asyncHandler = require("express-async-handler");
const ShoppingCart = require("../Models/shoppingCartModel");
const Product = require("../Models/productModel");


const AddOrUpdateCart = asyncHandler(async (req, res) => {
    const {userId} = req.user
    const user = await User.findById(userId);
    const shoppingCart = await ShoppingCart.findById(req.params._id)
    const product = await Product.findById(req.params._id)
    if (!product) {
        res.status(404);
        throw new Error("Product Not Found!!!");
    }

    //Shopping cart will have one enty per user id, even if the user has so many items in cart

    
    //Cart items will have all the itms in shopping cart for a user

    
    //updatequantityby will have the count by which an item`s quantity needs to be updated

    
    //if it is -1 that means we have to lower the count, if it is 5, it means we have to add 5 cunt to existing count

    
    //if updatequantity by is 0, item will be removed
});


module.exports = {
  AddOrUpdateCart,
};