const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole =  require("../middleware/CheckRoleMiddleware");


router.post('/', checkRole('ADMIN'), categoryController.create)
router.get('/', categoryController.getAll)
router.delete('/:id',checkRole('ADMIN'), categoryController.delete)
router.patch('/:id', checkRole('ADMIN'), categoryController.update)

module.exports = router