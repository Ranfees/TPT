
const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Create a product
router.post("/", createProduct);

// Get all products
router.get("/", getProducts);

// Get a single product
router.get("/:id", getProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
