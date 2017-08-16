import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Fornecedor } from '../fornecedor';

@Component({
  selector: 'alt-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {
  constructor(private service: FornecedorService) {}

  ngOnInit() {}

  gravar(fornecedor: Fornecedor) {
    this.service.inserir(fornecedor);
  }
}
