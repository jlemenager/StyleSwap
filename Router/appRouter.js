const Router = require('express').Router()
const postRouter = require('./postRouter')
const productRouter = require('./productRouter')
const userinfoRouter = require('./userinfoRouter')
const cartRouter = require('./cartRouter')

Router.use('/userinfo', userinfoRouter)
Router.use('/post', postRouter)
Router.use('/product', productRouter)
Router.use('/cart', cartRouter)

module.exports = Router