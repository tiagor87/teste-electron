import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorSharedModule } from './shared/fornecedor-shared.module';
import { EnderecoModule } from '../endereco/endereco.module';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { FornecedorService } from './shared/fornecedor.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FornecedorSharedModule,
    FornecedorRoutingModule,
    EnderecoModule,
    SharedModule
  ],
  declarations: [FornecedorCadastroComponent, FornecedorComponent],
  exports: [FornecedorComponent],
  providers: [FornecedorService]
})
export class FornecedorModule {}
