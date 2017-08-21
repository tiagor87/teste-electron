import { FornecedorProvider } from './../providers';
import { Request, Response, Application, Router } from 'express';

export class FornecedorController {
  constructor(private provider?: FornecedorProvider) {
    this.provider = this.provider || new FornecedorProvider();
  }

  public async obterPorFiltro(request: Request, response: Response) {
    try {
      let fornecedores = await this.provider.obterPorFiltro(request.query);
      response.status(200).json(fornecedores);
    } catch (e) {
      response.status(500).json(e);
    }
  }

  public async obterPorCodigoDeChamada(request: Request, response: Response) {
    try {
      let fornecedor = await this.provider.obterPorCodigoDeChamada(
        request.params.codigo
      );
      fornecedor
        ? response.status(200).json(fornecedor)
        : response.status(404).end();
    } catch (e) {
      response.status(500).json(e);
    }
  }

  public static configurar(endpoint: string, app: Application) {
    let controller = new FornecedorController();
    let router = Router();
    router
      .route('/cqrs/:codigo')
      .get(controller.obterPorCodigoDeChamada.bind(controller));
    router.route('/cqrs/').get(controller.obterPorFiltro.bind(controller));
    app.use(endpoint, router);
  }
}
