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

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/most-scored', userController.getMostScored)
router.get('/login/google', authenticateGoogle)
router.get('/login/google/callback', authenticateGoogleCallback, userController.oauthGoogle)
router.get('/login/facebook', authenticateFacebook)
router.get('/login/facebook/callback', authenticateFacebookCallback, userController.oauthFacebook)

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for managing users
 */
/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: Authentication operations
 */
/**
 * @swagger
 * /api/user/registration:
 *   post:
 *     summary: Register a new user
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Token to authenticate the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login with existing credentials
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Token to authenticate the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /api/user/auth:
 *   get:
 *     summary: Check if the user is authenticated
 *     tags: [Authorization]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Token to authenticate the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /login/google:
 *   get:
 *     summary: Log in using google oauth 2.0
 *     tags: [Authorization]
 *     responses:
 *       '200':
 *         description: Token to authenticate the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /login/facebook:
 *   get:
 *     summary: Log in using facebook oauth 2.0
 *     tags: [Authorization]
 *     responses:
 *       '200':
 *         description: Token to authenticate the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /api/user/most-scored:
 *  get:
 *     summary: Get a list of most scored users
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: integer
 *         description: ID of the category to filter by
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of users to return
 *     responses:
 *       200:
 *         description: An array of question objects
 */


module.exports = router