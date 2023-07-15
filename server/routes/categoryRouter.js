const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require("../middleware/CheckRoleMiddleware");


router.post('/', checkRole('ADMIN'), categoryController.create)
router.get('/', categoryController.getAll)
router.delete('/:id', checkRole('ADMIN'), categoryController.delete)
router.patch('/:id', checkRole('ADMIN'), categoryController.update)

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management
 */

/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: A category creation
 *
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories
 *
 *
 * /api/category/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: ID of the category to delete
 *     responses:
 *       200:
 *         description: A category deletion
 *
 *
 *   patch:
 *     summary: Update a category by ID
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               avatar:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: A category update
 */

module.exports = router