import { ConnectionPool } from 'mssql';
import { databaseConfig } from '../environment/environment';

export class BaseProvider {
  private connection: ConnectionPool;
  constructor() {
    this.connection = new ConnectionPool(databaseConfig);
  }

  protected async conectar() {
    if (this.connection.connected) {
      return this.connection;
    }
    try {
      await this.connection.connect();
    } catch (e) {
      if (e.code === 'EALREADYCONNECTED') {
        return this.connection;
      }
      throw e;
    }
  }
}
