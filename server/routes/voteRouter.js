const Router = require('express')
const router = new Router()
const authMiddleware = require("../middleware/AuthMiddleware");
const voteController = require('../controllers/voteController')

router.post('/', authMiddleware, voteController.create)
router.delete('/', authMiddleware, voteController.delete)
router.get('/:questionId', authMiddleware, voteController.getUserVotes) // authorized user votes for specific question

/**
 * @swagger
 * tags:
 *   name: Vote
 *   description: API for managing votes
 *   components:
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */

/**
 * @swagger
 * /api/vote:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Vote]
 *     summary: Create a new vote
 *     description: Create a new comment for question or answer
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               vote:
 *                 type: number
 *               userId:
 *                 type: number
 *               questionId:
 *                 type: number
 *               answerId:
 *                 type: number
 *             required:
 *               - text
 *               - userId
 *     responses:
 *       '200':
 *         description: Vote created successfully.
 *       '400':
 *         description: Bad Request. Invalid input data.
 *       '401':
 *         description: Unauthorized. User is not authenticated.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/vote/{answerId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Vote]
 *     summary: Get all votes
 *     description: Get all user's votes for specified question
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *       - in: param
 *         name: questionId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Votes fetched successfully.
 *       '400':
 *         description: Bad Request. Invalid input data.
 *       '401':
 *         description: Unauthorized. User is not authenticated.
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/vote:
 *   delete:
 *     tags: [Vote]
 *     summary: Delete a vote by userId, questionId, answerId
 *     description: Deletes the vote. Requires authentication.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: answerId
 *         required: false
 *         description: Numeric ID of the answer.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: questionId
 *         required: false
 *         description: Numeric ID of the question.
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Vote deleted successfully.
 *       '401':
 *         description: Unauthorized. User is not authenticated or does not have ADMIN role.
 *       '404':
 *         description: Vote not found.
 *       '500':
 *         description: Internal server error.
 */

module.exports = router