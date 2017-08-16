import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { FornecedorService } from './fornecedor.service';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [FormsModule, CommonModule, FornecedorRoutingModule],
  declarations: [
    FornecedorComponent,
    ListaComponent,
    NovoComponent,
    EdicaoComponent,
    CadastroComponent
  ],
  providers: [FornecedorService]
})
export class FornecedorModule {}
