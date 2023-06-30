const Router = require('express').Router()
const controller = require('../controller/commentController')

Router.put('/', controller.updatecomment) 
Router.post('/',controller.createcomment) 
Router.delete('/:id', controller.deletecomment)

module.exports = Router