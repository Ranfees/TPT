
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Bakery",
        "Chocolate",
        "Snacks",
        "Coolbar",
        "Fruits",
        "Milk",
        "Biscuits",
        "Other",
      ],
    },

    productType: {
      type: String,
      required: true,
      enum: ["piece", "weight", "box_piece"],
    },

    unit: {
      type: String,
      required: true,
      trim: true,
    },

    buyPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    sellPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    openingStock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    currentStock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    lowStockLimit: {
      type: Number,
      default: 0,
      min: 0,
    },

    piecesPerBox: {
      type: Number,
      min: 1,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
