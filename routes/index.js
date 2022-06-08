const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const answerRouter = require('./answerRouter')
const questionRouter = require('./questionRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/answer', answerRouter)
router.use('/question', questionRouter)

module.exports = router