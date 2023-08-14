const {Comment, User} = require('../models/models')
const ApiError = require('../error/ApiError')
const {handleValidationErrors} = require("../utils/validationUtils");
const {validationResult} = require("express-validator");

class CommentController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Validation error', errors.array()));
            }

            let {text, questionId, answerId} = req.body
            let comment = await Comment.create({text, userId: req.user.id, questionId, answerId});

            return res.json(comment)

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

            const {id} = req.params;
            const userId = req.user.id;

            const comment = await Comment.findByPk(id, {
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: {include: ["id"]},
                    },
                ]
            });

            if (!comment) return next(ApiError.notFound('Comment not found'))
            if (comment.user.id !== userId && req.user.role === 'USER')
                return next(ApiError.forbidden('You are not authorized to delete this comment'))


            const deletedComment = await Comment.findByPk(id);
            await Comment.destroy({where: {id}});

            return res.json(deletedComment);

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

}

module.exports = new CommentController()