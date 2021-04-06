import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../modal/ProdutoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutoModelService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutosModel(): Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto', this.token)
  }
  getProdutosByNome(nomeProduto: string): Observable<ProdutoModel[]>{
    const params = new HttpParams().append('nomeProduto',nomeProduto)
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto/produtos',{params});
  }
}
