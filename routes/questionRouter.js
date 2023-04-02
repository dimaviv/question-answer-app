const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController')
const checkRole = require("../middleware/CheckRoleMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware");

router.post('/', authMiddleware, questionController.create)
router.get('/', questionController.getAll)
router.get('/:id', questionController.getOne)
router.delete('/:id', checkRole('ADMIN'), questionController.delete)

/**
 * @swagger
 * tags:
 *   name: Question
 *   description: Questions API
 */

/**
 * @swagger
 * /api/question:
 *   post:
 *     summary: Create a new question
 *     tags: [Question]
 *     security:
 *       - bearerAuth: []
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
 *                 type: integer
 *               categoryId:
 *                 type: integer
 *               file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *             required:
 *               - text
 *               - userId
 *               - categoryId
 *     responses:
 *       200:
 *         description: A question object
 *   get:
 *     summary: Get a list of questions
 *     tags: [Question]
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: integer
 *         description: ID of the category to filter by
 *       - in: query
 *         name: isAnswered
 *         schema:
 *           type: boolean
 *         description: Whether to filter by answered questions
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of questions to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number to return
 *     responses:
 *       200:
 *         description: An array of question objects
 *
 * /api/question/{id}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [Question]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the question to retrieve
 *     responses:
 *       200:
 *         description: A question object
 *
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [Question]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the question to delete
 *     responses:
 *       200:
 *         description: Deletion successful message
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
module.exports = router