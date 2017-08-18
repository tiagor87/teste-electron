import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorSharedModule } from './shared/fornecedor-shared.module';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorListaItemComponent } from './fornecedor-lista-item/fornecedor-lista-item.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FornecedorSharedModule,
    FornecedorRoutingModule
  ],
  declarations: [
    FornecedorComponent,
    FornecedorListaComponent,
    FornecedorListaItemComponent,
    FornecedorCadastroComponent
  ],
  providers: []
})
export class FornecedorModule {}
