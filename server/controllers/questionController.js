const uuid = require('uuid')
const path = require('path')
const {Question, File, User, Comment} = require('../models/models')
const ApiError = require('../error/ApiError')
const {oneQuestionIncludes, questionVotesLiteral} = require('../utils/sequelizeOptions')
const {handleFilesUpload} = require("../utils/fileUtils");
const {allowedFileExtensions} = require("../config/config");
const {handleValidationErrors} = require("../utils/validationUtils");

class QuestionController {

    async create(req, res, next) {
        try {
            await handleValidationErrors(...arguments)
            let {text, categoryId} = req.body
            let question = await Question.create({text, userId: req.user.id, categoryId});

            if (req.files) {
                await handleFilesUpload(req.files.files, 'questionId', question.id, allowedFileExtensions);
            }
            return res.json(question)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            await handleValidationErrors(...arguments)
            let {categoryId, isAnswered, limit, page} = req.query
            page = page || 1
            limit = limit || 5
            let offset = page * limit - limit
            let questions;
            if (!categoryId && !isAnswered) {
                questions = await Question.findAndCountAll({
                    limit, offset,
                    include: {model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']},},
                    order: [['createdAt', 'DESC']]
                })
            }
            if (categoryId && !isAnswered) {
                questions = await Question.findAndCountAll({
                    where: {categoryId}, limit, offset,
                    include: {model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']},},
                    order: [['createdAt', 'DESC']]
                })
            }
            if (!categoryId && isAnswered) {
                questions = await Question.findAndCountAll({
                    where: {isAnswered}, limit, offset,
                    include: {model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']},},
                    order: [['createdAt', 'DESC']]
                })
            }
            if (categoryId && isAnswered) {
                questions = await Question.findAndCountAll({
                    where: {isAnswered, categoryId}, limit, offset,
                    include: {model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']},},
                    order: [['createdAt', 'DESC']]
                })
            }
            return res.json(questions)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            await handleValidationErrors(...arguments)
            const {id} = req.params;

            const question = await Question.findOne({
                where: {id},
                include: oneQuestionIncludes,
                order: [["createdAt", "DESC"]],
                attributes: {
                    include: [
                        questionVotesLiteral
                    ]
                },
            });

            return res.json(question);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    async delete(req, res, next) {
        try {
            await handleValidationErrors(...arguments)
            const {id} = req.params

            const question = await Comment.destroy({where: {id}})
            if (!question) return next(ApiError.notFound('Question not found'))

            return res.json(question)

        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

}

module.exports = new QuestionController()