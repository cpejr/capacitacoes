//importando o express
const express = require('express');
const routes = require('./routes');

//criar a nossa aplicação
const app = express();

app.use(express.json());
// PUXANDO TDO Q TA EM ROUTES
app.use(routes);

app.listen(3333);
