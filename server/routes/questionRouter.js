const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController')
const checkRole = require("../middleware/CheckRoleMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware");
const {param, body} = require("express-validator");

const createValidationRules = [
    body('text')
        .notEmpty().withMessage('Text is required')
        .isLength({max: 1500}).withMessage('Text should not exceed 1500 characters'),
    body('categoryId')
        .notEmpty().withMessage('Category ID is required')
        .isInt({min: 1}).withMessage('ID must be a positive integer'),
];

const getOneValidationRules = [
    param('id').notEmpty().withMessage('ID parameter is required').isInt({min: 1}).withMessage('ID must be a positive integer'),
];

const deleteValidationRules = [
    param('id').notEmpty().withMessage('ID parameter is required').isInt({min: 1}).withMessage('ID must be a positive integer'),
];

router.post('/', authMiddleware, createValidationRules, questionController.create);
router.get('/', questionController.getAll);
router.get('/:id', getOneValidationRules, questionController.getOne);
router.delete('/:id', checkRole('ADMIN'), deleteValidationRules, questionController.delete);


module.exports = router