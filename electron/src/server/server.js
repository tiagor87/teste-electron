'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers_1 = require('./controllers');
exports.server = express();
exports.server.use(cors());
exports.server.use(bodyParser.json());
controllers_1.FornecedorController.configurar(
  '/api/fornecedor',
  exports.server
);
exports.server.use(express.static(path.resolve('./src/app/')));
exports.server.use((req, res) =>
  res.sendFile(`${path.resolve('./src/app/')}/index.html`)
);
//# sourceMappingURL=server.js.map
