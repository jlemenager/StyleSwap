const Router = require('express').Router()
const controller = require('../controller/userinfoController')

Router.get('/', controller.getAllUsers) 
Router.post('/', controller.createUser)  
Router.get('/:id', controller.getUser) 
Router.put('/', controller.updateUser) 
Router.delete('/:id', controller.deleteUser)

module.exports = Router