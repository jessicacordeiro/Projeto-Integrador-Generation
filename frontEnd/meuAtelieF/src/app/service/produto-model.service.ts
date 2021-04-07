import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../modal/ProdutoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutoModelService {

  produtoModel: ProdutoModel

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

  getProdutoById(idProduto: number): Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(`http://localhost:8080/produto/${idProduto}`, this.token);
  }

  putProduto(produto: ProdutoModel): Observable<ProdutoModel>{
    return this.http.put<ProdutoModel>('http://localhost:8080/produto', this.token);
  }

}
