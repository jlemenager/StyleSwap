const Router = require('express').Router()
const commentRouter = require('./commentRouter')
const postRouter = require('./postRouter')
const productRouter = require('./productRouter')
const userinfoRouter = require('./userinfoRouter')

Router.use('/comment', commentRouter)
Router.use('/post', postRouter)
Router.use('/product', productRouter)
Router.use('/userinfo', userinfoRouter)

module.exports = Router