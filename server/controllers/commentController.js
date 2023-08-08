const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class CommentController {
    async create(req, res, next) {
        try {
            let {text, questionId, answerId} = req.body
            let comment = await Comment.create({text, userId: req.user.id, questionId, answerId});

            return res.json(comment)

        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

    async delete(req, res, next) {
        try {
            const {id} = req.params

            const comment = await Comment.destroy({where: {id}})
            if (!comment) return next(ApiError.notFound('Comment not found'))

            return res.json(comment)

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

}

module.exports = new CommentController()