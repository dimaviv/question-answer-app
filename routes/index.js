const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const answerRouter = require('./answerRouter')
const questionRouter = require('./questionRouter')
const commentRouter = require('./commentRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/answer', answerRouter)
router.use('/question', questionRouter)
router.use('/comment', commentRouter)

module.exports = router