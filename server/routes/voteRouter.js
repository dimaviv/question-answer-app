const Router = require('express')
const router = new Router()
const authMiddleware = require("../middleware/AuthMiddleware");
const voteController = require('../controllers/voteController')

router.post('/', authMiddleware, voteController.create)
router.delete('/', authMiddleware, voteController.delete)
router.get('/:questionId', authMiddleware, voteController.getUserVotes) // authorized user votes for specific question


module.exports = router