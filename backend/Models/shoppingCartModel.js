const { default: mongoose } = require("mongoose");

const shoppingCartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number },
        color: { type: String },
        price: { type: Number },
      },
    ],
    cartTotal: { type: Number },
    cartTotalAfterDiscount: { type: Number },
    paymentIntentId: {
      type: String,
    },
    clientSecret: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);
module.exports = ShoppingCart;
