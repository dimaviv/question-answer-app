const {QueryTypes} = require("sequelize");
const sequelize = require("../db");


class VoteQueries {
    async getUserVotes(userId, questionId) {
        const votes = await sequelize.query("(SELECT votes.id, vote, votes.\"createdAt\", votes.\"updatedAt\", votes.\"userId\",\n" +
            "\tvotes.\"answerId\", votes.\"questionId\", questions.id\n" +
            "FROM votes\n" +
            "JOIN answers on answers.id = votes.\"answerId\"\n" +
            "JOIN questions on questions.id = answers.\"questionId\"\n" +
            " WHERE votes.\"userId\" = :userId AND questions.id = :questionId\n" +
            " )\n" +
            " \n" +
            "UNION\n" +
            "\n" +
            "(SELECT votes.id, vote, votes.\"createdAt\", votes.\"updatedAt\", votes.\"userId\",\n" +
            "\tvotes.\"answerId\", votes.\"questionId\", questions.id as Q\n" +
            "FROM votes\n" +
            "JOIN questions on questions.id = votes.\"questionId\"\n" +
            "  WHERE votes.\"userId\" = :userId AND questions.id = :questionId\n" +
            ")",
            {
                replacements: {userId: userId, questionId: questionId},
                type: QueryTypes.SELECT
            })

        return votes
    }
}

module.exports = new VoteQueries()