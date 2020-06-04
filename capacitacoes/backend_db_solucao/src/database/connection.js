const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
console.log(configuration);

const connection = require('knex')(configuration);
module.exports = connection;