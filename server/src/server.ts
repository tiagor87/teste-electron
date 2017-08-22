import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { FornecedorController } from './controllers';

export const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
FornecedorController.configurar('/api/fornecedor', server);
