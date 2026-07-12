const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const validateRequest = require("../middleware/validateRequest");

const { createUserValidation } = require("../validators/userValidator");

// Create User
router.post(
    "/",
    createUserValidation,
    validateRequest,
    userController.createUser
);

// Get All Users
router.get("/", userController.getUsers);

// Get Single User
router.get("/:id", userController.getUserById);

module.exports = router;