import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedor.model';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FornecedorService {
  constructor(private http: Http) {}

  public obterPorFiltro(texto: string) {
    const params = new URLSearchParams();
    params.set('texto', texto);
    return this.http
      .get(`${environment.apiUrl}/fornecedor/cqrs`, {
        search: params
      })
      .map(response => response.json())
      .toPromise();
  }

  public obterPorCodigo(codigo: string) {
    return this.http
      .get(`${environment.apiUrl}/fornecedor/cqrs/${codigo}`)
      .map(response => response.json())
      .toPromise();
  }
}
