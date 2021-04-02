import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../modal/ProdutoModel';
import { UsuarioModel } from '../modal/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioModelService {

  usuario: UsuarioModel

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutosModel(): Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto')
  }

  postProdutoModel(produtoModel: ProdutoModel): Observable<ProdutoModel>{
    let url = `http://localhost:8080/usuario/produto/novo/${environment.id}`;
    console.log(produtoModel)
    return this.http.post<ProdutoModel>(url, produtoModel, this.token)
  }
}