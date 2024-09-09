const { default: mongoose } = require("mongoose");

const shippingAdressSchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    localGovernmentArea: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ShippingAddress = mongoose.model("ShippingAddress", shippingAdressSchema);
module.exports = ShippingAddress;
