import { FornecedorSharedModule } from './fornecedor/shared/fornecedor-shared.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FornecedorModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
