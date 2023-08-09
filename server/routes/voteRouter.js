const Router = require('express')
const router = new Router()
const authMiddleware = require("../middleware/AuthMiddleware");
const voteController = require('../controllers/voteController')
const {param, query, body} = require("express-validator");


const createVoteValidationRules = [
    body('vote')
        .notEmpty()
        .withMessage('Vote value is required')
        .custom((value) => value === 1 || value === -1)
        .withMessage('Vote must be either 1 or -1'),
    body('questionId')
        .optional()
        .isInt({min: 1})
        .withMessage('Question ID must be a positive integer'),
    body('answerId')
        .optional()
        .isInt({min: 1})
        .withMessage('Answer ID must be a positive integer'),
];

const getUserVotesValidationRules = [
    param('questionId')
        .notEmpty()
        .withMessage('Question ID is required')
        .isInt({min: 1})
        .withMessage('Question ID must be a positive integer'),
];

const deleteVoteValidationRules = [
    query('questionId')
        .optional()
        .isInt({min: 1})
        .withMessage('Question ID must be a positive integer'),
    query('answerId')
        .optional()
        .isInt({min: 1})
        .withMessage('Answer ID must be a positive integer'),
];


router.post('/', authMiddleware, createVoteValidationRules, voteController.create);
router.delete('/', authMiddleware, deleteVoteValidationRules, voteController.delete);
router.get('/:questionId', authMiddleware, getUserVotesValidationRules, voteController.getUserVotes); // authorized user votes for specific question


module.exports = router