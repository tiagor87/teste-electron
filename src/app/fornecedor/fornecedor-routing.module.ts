import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorComponent } from './fornecedor.component';
import { EdicaoComponent } from './edicao/edicao.component';

const routes: Routes = [
  {
    path: 'fornecedor',
    component: FornecedorComponent,
    children: [
      {
        path: '',
        component: NovoComponent
      },
      {
        path: ':id',
        component: EdicaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule {}
