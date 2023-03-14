const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class CommentController {
    async create(req, res, next) {
        try {
            let {text, userId, questionId, answerId} = req.body
            let comment = await Comment.create({text, userId, questionId, answerId});

            return res.json(comment)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async delete(req, res, next) {
        try {
            const {id} = req.params

            const answer = await Comment.destroy({where: {id}})
            if (answer) {
                return res.json("Deleted successfully!")
            } else {
                return res.json("Deletion error!")
            }

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}

module.exports = new CommentController()