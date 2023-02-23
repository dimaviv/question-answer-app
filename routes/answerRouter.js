const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answerController')
const checkRole =  require("../middleware/CheckRoleMiddleware");

router.post('/', answerController.create)
router.get('/',answerController.getAll)
router.delete('/:id', checkRole('ADMIN'), answerController.delete)

module.exports = router