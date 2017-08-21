import { Endereco } from '../../endereco/shared/endereco.model';

export class Fornecedor {
  public IdPessoa: string;
  public CdChamada: string;
  public CdCPF_CGC: string;
  public NmCurto: string;
  public NmPessoa: string;
  public TpPessoa: string;
  public NrTelefone: string;
  public TpFornecedor: string;
  public Endereco: Endereco;
  constructor(data: any) {
    this.IdPessoa = data.IdPessoa;
    this.NmPessoa = data.NmPessoa;
    this.CdChamada = data.CdChamada;
    this.CdCPF_CGC = data.CdCPF_CGC;
    this.NmCurto = data.NmCurto;
    this.TpPessoa = data.TpPessoa;
    this.NrTelefone = data.NrTelefone;
    this.TpFornecedor = data.TpFornecedor;
    this.Endereco = new Endereco(data);
  }
}
