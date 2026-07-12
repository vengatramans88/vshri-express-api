const userService = require("../services/userService");
const asyncHandler = require("../utils/asyncHandler");
const response = require("../helpers/responseHelper");
const MESSAGE = require("../utils/constants");

exports.getUsers = asyncHandler(async (req, res) => {

    const users = await userService.getUsers();

    response.success(
        res,
        MESSAGE.USER_CREATED,
        users
    );

});

exports.getUserById = asyncHandler(async (req, res) => {

    const user = await userService.getUserById(req.params.id);

    if (!user) {
        return response.error(
            res,
            MESSAGE.USER_CREATED,
            404
        );
    }

    response.success(
        res,
        MESSAGE.USER_CREATED,
        user
    );

});

exports.createUser = asyncHandler(async (req, res) => {

    const user = await userService.createUser(req.body);

    response.success(
        res,
        MESSAGE.USER_CREATED,
        user,
        201
    );

});

exports.updateUser = asyncHandler(async (req, res) => {

    const user = await userService.updateUser(
        req.params.id,
        req.body
    );

    if (!user) {
        return response.error(
            res,
            "User not found",
            404
        );
    }

    response.success(
        res,
        "User updated successfully",
        user
    );

});

exports.deleteUser = asyncHandler(async (req, res) => {

    const user = await userService.deleteUser(req.params.id);

    if (!user) {
        return response.error(
            res,
            "User not found",
            404
        );
    }

    response.success(
        res,
        "User deleted successfully"
    );

});