import { UF } from './uf.model';
import { Cidade } from './cidade.model';
import { Bairro } from './bairro.model';

export class Endereco {
  public CdEndereco: string;
  public CdCEP: string;
  public TpLogradouro: string;
  public NmLogradouro: string;
  public NrLogradouro: string;
  public DsComplemento: string;
  public Bairro: Bairro;
  public Cidade: Cidade;
  public UF: UF;
  constructor(data: any) {
    this.CdEndereco = data.CdEndereco;
    this.CdCEP = data.CdCEP;
    this.TpLogradouro = data.TpLogradouro;
    this.NmLogradouro = data.NmLogradouro;
    this.NrLogradouro = data.NrLogradouro;
    this.DsComplemento = data.DsComplemento;
    this.Bairro = new Bairro(data);
    this.Cidade = new Cidade(data);
    this.UF = new UF(data);
  }
}
