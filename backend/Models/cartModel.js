const { default: mongoose } = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: { type: Number, required: true, default: 1 },
        price: Number,
      },
    ],
    // cartTotal: { type: Number },
    // cartTotalAfterDiscount: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
