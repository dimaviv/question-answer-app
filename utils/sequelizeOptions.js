const {Answer, File, User, Comment} = require('../models/models')
const sequelize = require("../db");

const oneQuestionIncludes = [
    {
        model: Answer,
        as: "answers",
        include: [
            {model: File, as: "files", order: [["createdAt", "ASC"]]},
            {
                model: User,
                as: "user",
                attributes: {exclude: ["password", "role", "balance"]},
            },

            {
                model: Comment,
                as: "comments",
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: {exclude: ["password", "role", "balance"]},
                    },
                ],
                order: [["createdAt", "ASC"]],
            },

        ],
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    sequelize.literal(`(
                                        SELECT SUM(vote)
                                        FROM votes AS votes
                                        WHERE
                                            votes."answerId" = answers.id
                                    )`),
                    'votesCount'
                ]
            ]
        },
    },
    {
        model: File,
        as: "files",
        order: [["createdAt", "ASC"]],
    },
    {
        model: User,
        as: "user",
        attributes: {exclude: ["password", "role", "balance"]},
    },
    {
        model: Comment,
        as: "comments",
        include: [
            {
                model: User,
                as: "user",
                attributes: {exclude: ["password", "role", "balance"]},
            },
        ],
        order: [["createdAt", "ASC"]],
    },

]

const questionVotesLiteral = [
    sequelize.literal(`(
        SELECT SUM(vote)
        FROM votes AS votes
        WHERE
            votes."questionId" = question.id
    )`),
    'votesCount'
]


module.exports = {oneQuestionIncludes, questionVotesLiteral};