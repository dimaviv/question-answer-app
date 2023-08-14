const {Question, User, Comment} = require('../models/models')
const ApiError = require('../error/ApiError')
const {oneQuestionIncludes, questionVotesLiteral} = require('../utils/sequelizeOptions')
const {handleFilesUpload} = require("../utils/fileUtils");
const {allowedFileExtensions} = require("../config/config");
const sequelize = require('../db')
const {containsCyrillic, formatQuestionWithNestedUser} = require("../utils/helpers");

class QuestionController {

    async search(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }
            let {search} = req.query;

            const isCyrillic = await containsCyrillic(search)
            const lang = isCyrillic ? 'russian' : 'english'

            const sql = `
              SELECT q.id, q."text", q."isAnswered", q."createdAt", q."updatedAt", q."userId", q."categoryId",
              u.id AS "user.id", u.nickname AS "user.nickname", u.avatar AS "user.avatar", u.score AS "user.score"
              FROM questions q
              JOIN users u ON q."userId" = u.id
              WHERE text_search_vector @@ to_tsquery(:lang, :search)
            `;

            const result = await sequelize.query(sql, {
                replacements: {lang, search},
                type: sequelize.QueryTypes.SELECT,
            });

            const formatedResult = await formatQuestionWithNestedUser(result)

            res.json(formatedResult);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }
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
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }
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
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }
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
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }
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