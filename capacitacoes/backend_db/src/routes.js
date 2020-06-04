const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

routes.post('/players', PlayerController.create);

routes.get('/players/:id', PlayerController.getOne);

routes.get('/players', PlayerController.index);

routes.put('/players/:id', PlayerController.update);

routes.delete('/players/:id', PlayerController.delete);

module.exports = routes;




