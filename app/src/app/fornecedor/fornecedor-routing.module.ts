import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';

const routes: Routes = [
  {
    path: 'fornecedor',
    component: FornecedorComponent,
    children: [
      {
        path: '',
        component: FornecedorListaComponent
      },
      {
        path: 'cadastro',
        component: FornecedorCadastroComponent
      },
      {
        path: 'cadastro/:id',
        component: FornecedorCadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule {}
