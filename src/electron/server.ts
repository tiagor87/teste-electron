import * as express from 'express';
import * as path from 'path';

export const server = express();

server.get('/api/hello-world', (request, response) =>
  response.status(200).json({ message: 'Hello World' })
);

server.all('*', express.static(__dirname));
