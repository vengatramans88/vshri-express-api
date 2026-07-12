const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to VSHRI Express API 🚀"
    });
});

router.get("/health", (req, res) => {
    res.json({
        success: true,
        status: "UP",
        uptime: process.uptime(),
        version: "1.0.0"

    });
});

router.use("/users", userRoutes);

// Auth Routes
router.use("/auth", authRoutes);

module.exports = router;