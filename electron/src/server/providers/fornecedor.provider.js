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
const base_provider_1 = require("./base.provider");
class FornecedorProvider extends base_provider_1.BaseProvider {
    obterPorCodigoDeChamada(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!codigo) {
                return null;
            }
            let connection = yield this.conectar();
            let request = connection.request();
            let response = yield request.input('codigo', codigo).query(`
        select
          *
        from
          vw_cqrs_fornecedor
        where
          CdChamada = replicate('0', 6 - len(@codigo)) + @codigo`);
            return response.recordset.length > 0 ? response.recordset[0] : null;
        });
    }
    obterPorFiltro(filtro) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filtro || !filtro.texto) {
                return [];
            }
            let connection = yield this.conectar();
            let request = connection.request();
            let response = yield request.input('texto', `%${filtro.texto}%`).query(`
        select
          *
        from
          vw_cqrs_fornecedor
        where
          CdChamada like @texto or
          NmPessoa like @texto or
          CdCPF_CGC like @texto or
          NmLogradouro like @texto or
          NmCidade like @texto or
          NmBairro like @texto or
          IdUF like @texto`);
            return response.recordset;
        });
    }
}
exports.FornecedorProvider = FornecedorProvider;
//# sourceMappingURL=fornecedor.provider.js.map