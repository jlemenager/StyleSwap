const Router = require('express').Router()
const controller = require('../controller/userinfoController')

Router.get('/', controller.finduserinfo) 
Router.get('/:id', controller.findUserinfoById) 
Router.get('/brand/:id', controller.findUserinfoId) 
Router.post('/', controller.createUserinfo) 
Router.put('/', controller.updateUserinfo) 
Router.delete('/:id', controller.deleteUserinfo)

module.exports = Router