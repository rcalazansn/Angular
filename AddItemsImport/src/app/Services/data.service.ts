import { reject } from 'q';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private _restApiUrl = 'http://';

  constructor(private http: HttpClient) { }

  public login(usuario: Usuario): boolean {
    if (usuario.usuario == 'user' && usuario.senha == 'password')
      return true;
    else
      return false;
  }

  public enviarAPI(sku): Observable<any> {
    let body = { products: { productId: sku } };

    return this.http.put(this._restApiUrl, body);
  }
}

export class Usuario {
  usuario: string;
  senha: string
}
