const { Router } = require('express');
const urls = Router();
const { UserController } = require('./controllers');

const userController = new UserController();

urls.get('/users', userController.list)
urls.post('/users', userController.create);
urls.put('/users/:id', userController.update);
urls.delete('/users/:id', userController.remove);

module.exports = urls;
