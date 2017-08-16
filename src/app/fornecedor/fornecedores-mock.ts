import { Fornecedor } from './fornecedor';
export class FornecedoresMock {
  private static fornecedores: Fornecedor[] = [
    {
      IdPessoa: '1',
      CdPessoa: '000001',
      NmPessoa: 'Fornecedor 1'
    },
    {
      IdPessoa: '2',
      CdPessoa: '000002',
      NmPessoa: 'Fornecedor 2'
    },
    {
      IdPessoa: '3',
      CdPessoa: '000003',
      NmPessoa: 'Fornecedor 3'
    }
  ];

  public static obterLista(): Promise<Fornecedor[]> {
    return Promise.resolve(FornecedoresMock.fornecedores);
  }
}
