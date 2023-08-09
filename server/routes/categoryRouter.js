const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require("../middleware/CheckRoleMiddleware");
const {body, param} = require("express-validator");


const createValidationRules = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({max: 150}).withMessage('Name should not exceed 150 characters'),
];

const updateValidationRules = [
    param('id').notEmpty().withMessage('ID parameter is required').isInt({min: 1}).withMessage('ID must be a positive integer'),
    body('name').notEmpty().withMessage('Name is required'),
];

const deleteValidationRules = [
    param('id').notEmpty().withMessage('ID parameter is required').isInt({min: 1}).withMessage('ID must be a positive integer'),
];

router.post('/', checkRole('ADMIN'), createValidationRules, categoryController.create);
router.get('/', categoryController.getAll);
router.delete('/:id', checkRole('ADMIN'), deleteValidationRules, categoryController.delete);
router.patch('/:id', checkRole('ADMIN'), updateValidationRules, categoryController.update);


module.exports = router