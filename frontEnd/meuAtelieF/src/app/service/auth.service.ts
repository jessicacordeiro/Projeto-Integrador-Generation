import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

    getByIdUser() : Observable<UsuarioModel>{
      return this.http.get<UsuarioModel>(`http://localhost:8080/usuario/${environment.id}`)
    }

    logado(){
      let ok: boolean = false

      if(environment.token != ''){
        ok = true
      }

      return ok
    }

    btnSair() {
      let ok = false 
      let token = localStorage.getItem('token')
  
      if (token != null){
        ok = true
      }
  
      return ok
    }
  
    btnLogin() {
      let ok = false 
      let token = localStorage.getItem('token')
  
      if (token == null){
        ok = true
      }
  
      return ok
  
    }

    btnCadastrar() {
      let ok = false 
      let token = localStorage.getItem('token')
  
      if (token == null){
        ok = true
      }
  
      return ok
  
    }

    btnMinhaConta() {
      let ok = false 
      let token = localStorage.getItem('token')
  
      if (token != null){
        ok = true
      }
  
      return ok
    }

    btnEntrar() {
      let ok = false 
      let token = localStorage.getItem('token')
  
      if (token == null){
        ok = true
      }
  
      return ok
  
    }

    btnNome() {
      let ok = false 
      let token = localStorage.getItem('token')
  
      if (token != null){
        ok = true
      }
  
      return ok
    }
  
  }