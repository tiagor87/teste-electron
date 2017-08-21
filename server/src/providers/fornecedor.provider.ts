import { BaseProvider } from './base.provider';
import { Fornecedor, FornecedorFiltro } from '../models';

export class FornecedorProvider extends BaseProvider {
  public async obterPorCodigoDeChamada(codigo: string) {
    if (!codigo) {
      return null;
    }
    let connection = await this.conectar();
    let request = connection.request();
    let response = await request.input('codigo', codigo).query(`
        select
          *
        from
          vw_cqrs_fornecedor
        where
          CdChamada = replicate('0', 6 - len(@codigo)) + @codigo`);
    return response.recordset.length > 0 ? response.recordset[0] : null;
  }

  public async obterPorFiltro(filtro: FornecedorFiltro) {
    if (!filtro || !filtro.texto) {
      return [];
    }
    let connection = await this.conectar();
    let request = connection.request();
    let response = await request.input('texto', `%${filtro.texto}%`).query(`
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
  }
}
