import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UsuarioLogin} from '../modal/UsuarioLogin';
import {UsuarioModel} from '../modal/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
    )  { }

    entrar(usuarioLogin:UsuarioLogin):Observable<UsuarioLogin>{ 
      return this.http.post<UsuarioLogin>('http://localhost:8080/usuario/logar',usuarioLogin)
    }
   
    cadastrar(usuarioModel:UsuarioModel):Observable<UsuarioModel>{ 
      return this.http.post<UsuarioModel>('http://localhost:8080/usuario/cadastrar',usuarioModel)
    }

  }