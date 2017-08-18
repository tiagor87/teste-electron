import * as express from 'express';
import * as path from 'path';
import { PessoaProvider } from './provider';
import { pessoaRouter } from './routes';
export const server = express();

server.use('/api/pessoas', pessoaRouter);

server.all('*', express.static(__dirname));
