const authService = require("../services/authService");
const asyncHandler = require("../middleware/asyncHandler");

/**
 * Register User
 */
exports.register = asyncHandler(async (req, res) => {
    const user = await authService.register(req.body);

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
    });
});

/**
 * Login User
 */
exports.login = asyncHandler(async (req, res) => {
    const result = await authService.login(req.body);

    res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
    });
});

/**
 * Get Logged-in User Profile
 */
exports.getProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: req.user,
    });
});