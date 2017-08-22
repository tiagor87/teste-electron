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
const mssql_1 = require("mssql");
const environment_1 = require("../environment/environment");
class BaseProvider {
    constructor() {
        this.connection = new mssql_1.ConnectionPool(environment_1.databaseConfig);
    }
    conectar() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connection.connected) {
                return this.connection;
            }
            try {
                yield this.connection.connect();
            }
            catch (e) {
                if (e.code === 'EALREADYCONNECTED') {
                    return this.connection;
                }
                throw e;
            }
        });
    }
}
exports.BaseProvider = BaseProvider;
//# sourceMappingURL=base.provider.js.map