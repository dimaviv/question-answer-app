const {User} = require('../models/models');
const {validationResult} = require("express-validator");
const ApiError = require("../error/ApiError");

const handleValidationErrors = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(ApiError.badRequest('Validation error', errors.array()));
    }
    next();
}

const isNicknameUnique = async (nickname) => {
    const count = await User.count({
        where: {
            nickname: nickname
        }
    });

    return count === 0;
};

module.exports = {
    isNicknameUnique,
    handleValidationErrors,
};
