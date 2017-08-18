import { FornecedoresMock } from './fornecedores-mock';
import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedor.model';

@Injectable()
export class FornecedorService {
  constructor() {}

  public async obterTodos() {
    return await FornecedoresMock.obterLista();
  }

  public async gravar(fornecedor: Fornecedor) {
    return !!fornecedor.IdPessoa
      ? this.atualizar(fornecedor)
      : this.inserir(fornecedor);
  }

  private async inserir(fornecedor: Fornecedor) {
    const fornecedores = await FornecedoresMock.obterLista();
    fornecedor.IdPessoa = (fornecedores.length + 1).toString();
    fornecedores.push(fornecedor);
    return Promise.resolve(fornecedor);
  }

  private async atualizar(fornecedor: Fornecedor) {
    const fornecedores = await FornecedoresMock.obterLista();
    const i = fornecedores.findIndex(f => f.IdPessoa === fornecedor.IdPessoa);
    fornecedores.splice(i, 1, fornecedor);
    return Promise.resolve(fornecedor);
  }
}
