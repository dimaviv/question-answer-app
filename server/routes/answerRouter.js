const {body, param} = require('express-validator');
const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answerController')
const checkRole = require("../middleware/CheckRoleMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware");


const createValidationRules = [
    body('text')
        .notEmpty().withMessage('Text is required')
        .isLength({max: 1500}).withMessage('Text should not exceed 1500 characters'),
    body('questionId')
        .notEmpty().withMessage('Question ID is required')
        .isInt({min: 1}).withMessage('Question ID must be a positive integer'),
];

const deleteValidationRules = [
    param('id')
        .notEmpty().withMessage('ID parameter is required')
        .isInt({min: 1}).withMessage('ID must be a positive integer'),
];

router.post('/', authMiddleware, createValidationRules, answerController.create);
router.delete('/:id', checkRole('ADMIN'), deleteValidationRules, answerController.delete)


module.exports = router