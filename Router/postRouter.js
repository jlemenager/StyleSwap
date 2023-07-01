const Router = require('express').Router()
const express = require('express');
const controller = require('../controller/postController')


Router.get('/', controller.getAllPosts)
Router.post('/', controller.createPost)
Router.get('/:id', controller.getPost) 
Router.put('/:id',controller.updatePost) 
Router.delete('/:id', controller.deletePost)


module.exports = Router