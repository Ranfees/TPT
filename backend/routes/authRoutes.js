const express = require("express");

const {createFirstAdmin,login,logout,getMe,} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// First admin setup
router.post("/setup-admin", createFirstAdmin);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

router.get("/me", protect, getMe);

module.exports = router;