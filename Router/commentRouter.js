const express = require('express');
const Router = express.Router();
const controller = require('../controller/commentController');

Router.get('/', controller.getAllComments);
Router.post('/', controller.createComment);
Router.get('/:id', controller.getComment);
Router.put('/:id', controller.updateComment);
Router.delete('/:id', controller.deleteComment);

module.exports = Router;

