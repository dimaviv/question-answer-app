const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')
const authMiddleware = require("../middleware/AuthMiddleware");
const {body, param} = require("express-validator");

const createValidationRules = [
    body('text').notEmpty().withMessage('Text is required'),
    body('questionId').optional({checkFalsy: true}).isInt({min: 1}).withMessage('Question ID must be a positive integer'),
    body('answerId').optional({checkFalsy: true}).isInt({min: 1}).withMessage('Answer ID must be a positive integer'),
];

const deleteValidationRules = [
    param('id')
        .notEmpty().withMessage('ID parameter is required')
        .isInt({min: 1}).withMessage('ID must be a positive integer'),
];

router.post('/', authMiddleware, createValidationRules, commentController.create);
router.delete('/:id', authMiddleware, deleteValidationRules, commentController.delete);


module.exports = router