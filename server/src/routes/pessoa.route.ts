import { PessoaProvider } from './../provider';
import { Request, Response, Router } from 'express';

export const pessoaRouter = Router();

pessoaRouter.route('/').get(async (request: Request, response: Response) => {
  try {
    const pessoaProvider = new PessoaProvider();
    const pessoas = await pessoaProvider.obterPessoas();
    response.status(200).json(pessoas);
  } catch (e) {
    response.status(400).json(e);
  }
});
