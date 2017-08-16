import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HelloWorldService {
  constructor(private http: Http) {}

  public getHelloWorld() {
    return this.http.get('/api/pessoas').map(response => response.json());
  }
}
