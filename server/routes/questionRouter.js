const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController')
const checkRole = require("../middleware/CheckRoleMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware");

router.post('/', authMiddleware, questionController.create)
router.get('/', questionController.getAll)
router.get('/:id', questionController.getOne)
router.delete('/:id', checkRole('ADMIN'), questionController.delete)

module.exports = router