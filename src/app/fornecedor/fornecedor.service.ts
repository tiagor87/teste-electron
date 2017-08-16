import { FornecedoresMock } from './fornecedores-mock';
import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedor';

@Injectable()
export class FornecedorService {
  constructor() {}

  public async obterTodos() {
    return await FornecedoresMock.obterLista();
  }

  public async inserir(fornecedor: Fornecedor) {
    const fornecedores = await FornecedoresMock.obterLista();
    fornecedor.IdPessoa = (fornecedores.length + 1).toString();
    fornecedores.push(fornecedor);
    return Promise.resolve(fornecedor);
  }
}
