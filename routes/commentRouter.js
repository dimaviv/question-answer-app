const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')
const authMiddleware = require("../middleware/AuthMiddleware");

router.post('/', authMiddleware, commentController.create)
router.delete('/:id', authMiddleware, commentController.delete)

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: API for managing answers
 *   components:
 *     securitySchemes:
 *       BearerAuth:
 *         type: http
 *         scheme: bearer
 */

/**
 * @swagger
 * /api/comment:
 *   post:
 *     tags: [Comment]
 *     summary: Create a new answer
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
 *               text:
 *                 type: string
 *               userId:
 *                 type: number
 *               questionId:
 *                 type: number
 *               answerId:
 *                 type: number
 *             required:
 *               - text
 *               - userId
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Comment created successfully.
 *       '400':
 *         description: Bad Request. Invalid input data.
 *       '401':
 *         description: Unauthorized. User is not authenticated.
 *       '500':
 *         description: Internal server error.
 *
 *
 * @swagger
 *
 * /api/comment/{id}:
 *   delete:
 *     tags: [Comment]
 *     summary: Delete a comment by ID
 *     description: Deletes the comment with the specified ID. Requires ADMIN role.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the answer to delete.
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Comment deleted successfully.
 *       '401':
 *         description: Unauthorized. User is not authenticated or does not have ADMIN role.
 *       '404':
 *         description: Comment not found.
 *       '500':
 *         description: Internal server error.
 */

module.exports = router