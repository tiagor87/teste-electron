"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./../services");
const providers_1 = require("./../providers");
const express_1 = require("express");
exports.fornecedorRouter = express_1.Router();
exports.fornecedorRouter.route('/cqrs').get((request, response) => {
    const service = new services_1.FornecedorService(new providers_1.FornecedorProvider());
    service
        .obterTodos()
        .then(fornecedores => response.status(200).json(fornecedores))
        .catch(e => response.status(400).json(e));
});
//# sourceMappingURL=fornecedor.route.js.map