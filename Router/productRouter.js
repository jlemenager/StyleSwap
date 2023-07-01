const Router = require('express').Router()
const controller = require('../controller/productController')

Router.get('/', controller.getAllProducts) 
Router.post('/', controller.createProduct) 
Router.get('/:id', controller.getProduct) 
Router.put('/:id', controller.updateProduct) 
Router.delete('/:id', controller.deleteProduct)

module.exports = Router