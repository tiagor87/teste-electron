"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FornecedorService {
    constructor(provider) {
        this.provider = provider;
    }
    obterTodos() {
        return this.provider.getAll();
    }
}
exports.FornecedorService = FornecedorService;
//# sourceMappingURL=fornecedor.service.js.map