import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioComponent } from './componentes/usuario/usuario.component.ts';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private readonly _http = inject(HttpClient);

  getAllUser(): Observable<usuario.component.ts>
  return this._http.get('./frontend')
  constructor() { }
}
