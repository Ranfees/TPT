
const Product = require("../models/Product");

// CREATE PRODUCT
const createProduct = async (req, res) => {
    try {
        const {name,category,productType,unit,buyPrice,sellPrice,openingStock,lowStockLimit,piecesPerBox,} = req.body;

        const product = await Product.create({
            name,
            category,
            productType,
            unit,
            buyPrice,
            sellPrice,
            openingStock,
            currentStock: openingStock,
            lowStockLimit,
            piecesPerBox,
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({ isActive: true }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// GET SINGLE PRODUCT
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid product ID",
        });
    }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// DELETE PRODUCT (SOFT DELETE)
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deactivated successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid product ID",
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
