const uuid = require('uuid')
const path = require('path')
const {Question, File, User, Comment} = require('../models/models')
const ApiError = require('../error/ApiError')
const {oneQuestionIncludes, questionVotesLiteral} = require('../utils/sequelizeOptions')

class QuestionController {

    async create(req, res, next) {
        try {
            let {text, userId, categoryId} = req.body
            let question = await Question.create({text, userId, categoryId});

            if (req.files) {
                let {file} = req.files
                let extension;

                if (!file.length) {
                    extension = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
                    let fileName = uuid.v4() + '.' + extension

                    file.mv(path.resolve(__dirname, '..', 'static', fileName))

                    File.create({
                        name: fileName,
                        extension: extension,
                        questionId: question.id
                    })

                } else {
                    file.forEach(f => {

                        extension = f.name.slice((f.name.lastIndexOf(".") - 1 >>> 0) + 2);
                        let fileName = uuid.v4() + '.' + extension

                        f.mv(path.resolve(__dirname, '..', 'static', fileName))

                        File.create({
                            name: fileName,
                            extension: extension,
                            questionId: question.id
                        })
                    })
                }
            }

            return res.json(question)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res, next) {
        try {
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
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
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
            next(ApiError.badRequest(error.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params

            const question = await Comment.destroy({where: {id}})
            if (!question) return next(ApiError.notFound('Question not found'))

            return res.json(question)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}

module.exports = new QuestionController()