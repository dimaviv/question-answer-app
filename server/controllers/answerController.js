const uuid = require('uuid')
const path = require('path')
const {Answer, File} = require('../models/models')
const ApiError = require('../error/ApiError')
const {handleFilesUpload} = require("../utils/fileUtils");
const {allowedFileExtensions} = require("../config/config");

class AnswerController {
    async create(req, res, next) {
        try {
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