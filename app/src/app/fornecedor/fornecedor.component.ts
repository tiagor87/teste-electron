import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './shared/fornecedor.model';

@Component({
  selector: 'alt-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {
  fornecedor: Fornecedor;
  constructor() {}

  ngOnInit() {}
}
