import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorService } from './fornecedor.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [FornecedorService],
  exports: [FornecedorService],
  declarations: []
})
export class FornecedorSharedModule {}
