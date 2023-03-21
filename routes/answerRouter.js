const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answerController')
const checkRole = require("../middleware/CheckRoleMiddleware");


router.post('/', answerController.create)
router.delete('/:id', checkRole('ADMIN'), answerController.delete)


/**
 * @swagger
 * tags:
 *   name: Answer
 *   description: API for managing answers
 */

/**
 * @swagger
 * /api/answer:
 *   post:
 *     tags: [Answer]
 *     summary: Create a new answer
 *     description: Create a new answer with optional file uploads
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
 *               file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *             required:
 *               - text
 *               - userId
 *               - questionId
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               userId:
 *                 type: number
 *               questionId:
 *                 type: number
 *             required:
 *               - text
 *               - userId
 *               - questionId
 *     responses:
 *       '200':
 *         description: Answer created successfully.
 *
 * /api/answer/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags: [Answer]
 *     summary: Delete an answer by ID
 *     description: Deletes the answer with the specified ID. Requires ADMIN role.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the answer to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Answer deleted successfully.
 *       '401':
 *         description: Unauthorized. User is not authenticated or does not have ADMIN role.
 *       '404':
 *         description: Answer not found.
 *       '500':
 *         description: Internal server error.
 */


module.exports = router