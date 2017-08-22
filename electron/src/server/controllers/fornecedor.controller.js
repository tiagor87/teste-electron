"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("./../providers");
const express_1 = require("express");
class FornecedorController {
    constructor(provider) {
        this.provider = provider;
        this.provider = this.provider || new providers_1.FornecedorProvider();
    }
    obterPorFiltro(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let fornecedores = yield this.provider.obterPorFiltro(request.query);
                response.status(200).json(fornecedores);
            }
            catch (e) {
                response.status(500).json(e);
            }
        });
    }
    obterPorCodigoDeChamada(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let fornecedor = yield this.provider.obterPorCodigoDeChamada(request.params.codigo);
                fornecedor
                    ? response.status(200).json(fornecedor)
                    : response.status(404).end();
            }
            catch (e) {
                response.status(500).json(e);
            }
        });
    }
    static configurar(endpoint, app) {
        let controller = new FornecedorController();
        let router = express_1.Router();
        router
            .route('/cqrs/:codigo')
            .get(controller.obterPorCodigoDeChamada.bind(controller));
        router.route('/cqrs/').get(controller.obterPorFiltro.bind(controller));
        app.use(endpoint, router);
    }
}
exports.FornecedorController = FornecedorController;
//# sourceMappingURL=fornecedor.controller.js.map