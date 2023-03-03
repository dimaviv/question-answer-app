const uuid = require('uuid')
const path = require('path')
const {Question, Answer, File} = require('../models/models')
const ApiError = require('../error/ApiError')

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
            questions = await Question.findAndCountAll({limit, offset})
        }
        if (categoryId && !isAnswered) {
            questions = await Question.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if (!categoryId && isAnswered) {
            questions = await Question.findAndCountAll({where: {isAnswered}, limit, offset})
        }
        if (categoryId && isAnswered) {
            questions = await Question.findAndCountAll({where: {isAnswered, categoryId}, limit, offset})
        }
        return res.json(questions)
    }

    async getOne(req, res) {
        const {id} = req.params
        const question = await Question.findOne(
            {
                where: {id},
                include: [{model: Answer, as: 'answers', include: [{model: File, as: 'files'}]}, {
                    model: File,
                    as: 'files'
                }]
            },
        )
        return res.json(question)
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