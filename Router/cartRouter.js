const Router = require('express').Router()
const express = require('express');
const controller = require('../controller/cartController')

Router.get('/', controller.getAllCarts)
Router.post('/', controller.createCart)
Router.get('/:id', controller.getCart) 
Router.put('/:id',controller.updateCart) 
Router.delete('/:id', controller.deleteCart)

module.exports = Router