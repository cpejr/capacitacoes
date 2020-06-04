const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

routes.post('/players', PlayerController.create);

routes.get('/player/:id', PlayerController.getOne);

routes.get('/players', PlayerController.index);

routes.put('/player/:id', PlayerController.update);

routes.delete('/player/:id', PlayerController.delete);

module.exports = routes;




