import { FornecedorModule } from './fornecedor/fornecedor.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, HttpModule, AppRoutingModule, FornecedorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
