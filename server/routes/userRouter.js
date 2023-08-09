const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')
const {
    authenticateGoogle,
    authenticateGoogleCallback,
    authenticateFacebook,
    authenticateFacebookCallback
} = require('../middleware/OauthMiddleware')
const {body, query} = require("express-validator");


const patchProfileValidationRules = [
    body('nickname')
        .optional()
        .isLength({max: 50})
        .withMessage('Nickname should not exceed 50 characters'),
    // Add validation for avatar if needed
];

const mostScoredValidationRules = [
    query('categoryId')
        .optional()
        .isInt({min: 1})
        .withMessage('CategoryId must be a positive integer'),
    query('limit')
        .optional()
        .isInt({min: 1})
        .withMessage('Limit must be a positive integer'),
];

const registrationValidationRules = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long'),
];

const loginValidationRules = [
    body('email').isEmail().withMessage('Invalid email format'),
];


// User
router.get('/profile', authMiddleware, userController.getProfile)
router.patch('/profile', authMiddleware, patchProfileValidationRules, userController.updateProfile)
router.get('/most-scored', mostScoredValidationRules, userController.getMostScored);

// Auth
router.post('/registration', registrationValidationRules, userController.registration)
router.get('/activate/:link', userController.activate) // Email verification
router.post('/login', loginValidationRules, userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/login/google', authenticateGoogle)
router.get('/login/google/callback', authenticateGoogleCallback, userController.oauthGoogle)
router.get('/login/facebook', authenticateFacebook)
router.get('/login/facebook/callback', authenticateFacebookCallback, userController.oauthFacebook)


module.exports = router