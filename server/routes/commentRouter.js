const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')
const authMiddleware = require("../middleware/AuthMiddleware");

router.post('/', authMiddleware, commentController.create)
router.delete('/:id', authMiddleware, commentController.delete)


module.exports = router