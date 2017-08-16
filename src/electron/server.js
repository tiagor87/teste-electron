"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
exports.server = express();
exports.server.get('/', express.static(path.join(__dirname, 'dist')));
exports.server.get('/api/hello-world', function (request, response) {
    return response.status(200).json({ message: 'Hello World' });
});
