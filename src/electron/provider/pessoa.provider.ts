import { ConnectionPool } from 'mssql';
import { Pessoa } from '../models';

const config = {
  server: 'localhost\\sqlexpress',
  database: 'Estoque',
  authenticationType: 'SqlLogin',
  user: 'sa',
  password: 'senhas'
};

export class PessoaProvider {
  private pool: ConnectionPool;
  constructor() {
    this.pool = new ConnectionPool(config);
  }

  public async obterPessoas() {
    const connection = await this.pool.connect();
    const request = connection.request();
    const response = await request.query<Pessoa>('select * from pessoa');
    return response.recordset;
  }
}
