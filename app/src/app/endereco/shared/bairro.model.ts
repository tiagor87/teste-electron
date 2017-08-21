export class Bairro {
  public IdBairro: string;
  public NmBairro: string;
  constructor(data: any) {
    this.IdBairro = data.IdBairro;
    this.NmBairro = data.NmBairro;
  }
}
