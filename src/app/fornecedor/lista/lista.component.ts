import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor';

@Component({
  selector: 'alt-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public fornecedores: Fornecedor[];
  constructor(private service: FornecedorService) {}

  async ngOnInit() {
    this.fornecedores = await this.service.obterTodos();
  }
}
