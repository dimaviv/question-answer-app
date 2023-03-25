const uuid = require('uuid')
const path = require('path')
const {Answer, File, User} = require('../models/models')
const ApiError = require('../error/ApiError')

class AnswerController {
    async create(req, res, next) {
        try {
            let {text, userId, questionId} = req.body
            let answer = await Answer.create({text, userId, questionId});

            if (req.files) {
                let {file} = req.files
                let extension;

                if (!file.length) {
                    extension = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
                    let fileName = uuid.v4() + '.' + extension

                    await file.mv(path.resolve(__dirname, '..', 'static', fileName))

                    await File.create({
                        name: fileName,
                        extension: extension,
                        answerId: answer.id
                    })

                } else {
                    file.forEach(f => {
                        extension = f.name.slice((f.name.lastIndexOf(".") - 1 >>> 0) + 2);
                        let fileName = uuid.v4() + '.' + extension

                        f.mv(path.resolve(__dirname, '..', 'static', fileName))

                        File.create({
                            name: fileName,
                            extension: extension,
                            answerId: answer.id
                        })
                    })
                }
            }

            return res.json(answer)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async delete(req, res, next) {
        const {id} = req.params

        const answer = await Answer.destroy({where: {id}})
            .catch(err => next(ApiError.badRequest(err.message)))

        if (!answer) return next(ApiError.notFound('Answer not found'))
        return res.json(answer)
    }

}

module.exports = new AnswerController()