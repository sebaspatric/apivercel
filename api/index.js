const app = require('../server'); // Importa la app desde server.js
const { createServer } = require('http');

const server = createServer(app);

module.exports = (req, res) => {
  server.emit('request', req, res);
};
