const {Answer} = require('../models/models')
const ApiError = require('../error/ApiError')
const {handleFilesUpload} = require("../utils/fileUtils");
const {allowedFileExtensions} = require("../config/config");
const {validationResult} = require("express-validator");


class AnswerController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }

            let {text, questionId} = req.body
            let answer = await Answer.create({text, userId: req.user.id, questionId});

            if (req.files) {
                await handleFilesUpload(req.files.files, 'answerId', answer.id, allowedFileExtensions);
            }

            return res.json(answer)

        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

    async delete(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }

            const {id} = req.params

            const answer = await Answer.destroy({where: {id}})
                .catch(err => next(ApiError.internal(err.message)))

            if (!answer) return next(ApiError.notFound('Answer not found'))
            return res.json(answer)
        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

}

module.exports = new AnswerController()