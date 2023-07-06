const Router = require('express').Router()
const controller = require('../controller/userinfoController')

Router.get('/', controller.getAllUsers) 
Router.post('/signup', controller.createUser)  
Router.get('/:id', controller.getUser) 
Router.put('/loginpage/:id', controller.updateUser) 
Router.put('/logoutpage/:id', controller.updateUser) 
Router.delete('/:id', controller.deleteUser)

module.exports = Router