const User = require("../models/User");

exports.getUsers = async () => {
    return await User.find();
};

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.createUser = async (userData) => {
    return await User.create(userData);
};

exports.updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(
        id,
        userData,
        {
            new: true,
            runValidators: true
        }
    );
};

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};