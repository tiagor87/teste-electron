import { Fornecedor } from './../shared/fornecedor.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'alt-fornecedor-lista-item',
  templateUrl: './fornecedor-lista-item.component.html',
  styleUrls: ['./fornecedor-lista-item.component.scss']
})
export class FornecedorListaItemComponent implements OnInit {
  @Input() public indice: number;
  @Input() public selecionado: boolean;
  @Input() public fornecedor: Fornecedor;
  @Output() public selecao = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  selecionar() {
    this.selecao.emit(this.indice);
  }
}
