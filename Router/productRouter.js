const Router = require('express').Router()
const controller = require('../controller/productController')

Router.get('/', controller.findproduct) 
Router.get('/:id', controller.findProductById) 
Router.get('/brand/:id', controller.findProductByBrandId) 
Router.post('/', controller.createProduct) 
Router.put('/', controller.updateProduct) 
Router.delete('/:id', controller.deleteproduct)

module.exports = Router