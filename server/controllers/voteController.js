const {Vote} = require('../models/models')
const ApiError = require('../error/ApiError')
const voteQueries = require('../queries/voteQueries')


class VoteController {
    async create(req, res, next) {
        try {
            let {vote, questionId, answerId} = req.body
            if (questionId === undefined) questionId = null
            if (answerId === undefined) answerId = null

            let existingVote = await Vote.findOne({where: {userId: req.user.id, questionId, answerId}})
            let newVote;
            if (existingVote) {
                newVote = await Vote.update({vote, updatedAt: new Date()},
                    {
                        where: {userId: req.user.id, questionId, answerId}
                    });
            } else {
                newVote = await Vote.create({vote, userId: req.user.id, questionId, answerId});
            }
            return res.json(newVote)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getUserVotes(req, res, next) {
        try {
            let {questionId} = req.params

            const votes = await voteQueries.getUserVotes(req.user.id, questionId)

            return res.json(votes)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            let {questionId, answerId} = req.query
            if (questionId === undefined) questionId = null
            if (answerId === undefined) answerId = null

            const vote = await Vote.destroy({where: {userId: req.user.id, questionId, answerId}})
            if (vote) {
                return res.json("Deleted successfully!")
            } else {
                return res.json("Deletion error!")
            }
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

}

module.exports = new VoteController()