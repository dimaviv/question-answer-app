const uuid = require('uuid')
const path = require('path')
const {Question, Answer, File, User, Comment, Vote} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require("sequelize");

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

    async getAll(req, res) {
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
    }

    async getOne(req, res) {
        const {id} = req.params
        const question = await Question.findOne(
            {
                where: {id},
                include: [{
                    model: Answer, as: 'answers', include: [{model: File, as: 'files', order: [['createdAt', 'ASC']]},
                        {model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']}},
                        {
                            model: Vote,
                            as: 'votes'
                        },
                        {
                            model: Comment,
                            as: 'comments',
                            include: [{
                                model: User,
                                as: 'user',
                                attributes: {exclude: ['password', 'role', 'balance']}
                            }],
                            order: [['createdAt', 'ASC']]
                        }]
                }, {
                    model: File,
                    as: 'files',
                    order: [['createdAt', 'ASC']]
                }, {model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']}},
                    {
                        model: Comment,
                        as: 'comments',
                        include: [{model: User, as: 'user', attributes: {exclude: ['password', 'role', 'balance']}}],
                        order: [['createdAt', 'ASC']]
                    },
                    {
                        model: Vote,
                        as: 'votes'
                    },

                ],
                order: [['createdAt', 'DESC']]
            },
        )
        let result = JSON.parse(JSON.stringify(question))

        let count = 0;
        result.votes.forEach(function (arrayItem) {
            count += arrayItem.vote;
        });
        result.votes = count;

        let sum = 0;
        result.answers.forEach(function (answer) {
            sum = 0
            answer.votes.forEach(function (voteObj) {
                sum += voteObj.vote;
            })
            answer.votes = sum;
        });

        return res.json(result)
    }

    async delete(req, res) {
        const {id} = req.params
        let question = await Question.destroy({where: {id}})

        if (question) {
            return res.json("Deleted successfully")
        } else {
            return res.json("Deletion error")
        }

    }

}

module.exports = new QuestionController()