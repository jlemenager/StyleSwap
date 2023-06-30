const Router = require('express').Router()
const controller = require('../controller/postController')

Router.put('/', controller.updatepost) 
Router.post('/',controller.createpost) 
Router.delete('/:id', controller.deletepost)

module.exports = Router