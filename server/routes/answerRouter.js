const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answerController')
const checkRole = require("../middleware/CheckRoleMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware");


router.post('/', authMiddleware, answerController.create)
router.delete('/:id', checkRole('ADMIN'), answerController.delete)


module.exports = router