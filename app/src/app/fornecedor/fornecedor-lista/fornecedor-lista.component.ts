import { Component, OnInit, Input } from '@angular/core';
import { Fornecedor } from '../shared/fornecedor.model';
import { FornecedorService } from '../shared/fornecedor.service';

@Component({
  selector: 'alt-fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html',
  styleUrls: ['./fornecedor-lista.component.scss']
})
export class FornecedorListaComponent implements OnInit {
  public indiceSelecao: number = -1;
  public fornecedores: Array<Fornecedor>;

  constructor(private service: FornecedorService) {}

  async ngOnInit() {
    this.fornecedores = await this.service.obterTodos();
  }

  selecionar(indice: number) {
    this.indiceSelecao = indice;
  }
}
