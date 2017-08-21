import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoCadastroComponent } from './endereco-cadastro/endereco-cadastro.component';
import { EnderecoService } from './shared/endereco.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [EnderecoCadastroComponent],
  exports: [EnderecoCadastroComponent],
  providers: [EnderecoService]
})
export class EnderecoModule {}
