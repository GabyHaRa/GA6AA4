import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//import { UsuarioComponent } from './componentes/usuario/usuario.component.ts';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
/*export class UserServiceService {
  private readonly _http = inject(HttpClient);

  getAllUser(): Observable<any>
  return this._http.get('./frontend')
}*/
export class UserServiceService {
  servidor="http://localhost:9000/api/users"
  constructor(private servicio:HttpClient) {}
  ConsultarClientes(): Observable<any>{
    return this.servicio.get('${this.servidor}/users')
  }
}
