//importando o express
const express = require('express');
const routes = require('./routes');

//criar a nossa aplicação
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
