import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../modal/ProdutoModel';
import { UsuarioModel } from '../modal/UsuarioModel';

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
    return this.http.get<ProdutoModel[]>(`http://localhost:8080/produto/produtos/${nomeProduto}`);
  }

  getProdutoById(idProduto: number): Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(`http://localhost:8080/produto/${idProduto}`, this.token);
  }

  putProduto(produto: ProdutoModel): Observable<ProdutoModel>{
    return this.http.put<ProdutoModel>('http://localhost:8080/produto',produto, this.token);
  }

  deleteProduto(idProduto : number , idUsuario :number):  Observable<ProdutoModel>{
    return this.http.delete<ProdutoModel>(`http://localhost:8080/usuario/produto/delete/${idProduto}/${idUsuario}`,this.token);
  }

  getProdutosByQuarto(): Observable<ProdutoModel[]>{
    const params = new HttpParams().append('categoria','QUARTO')
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto/produtos/categoria',{params});
  }

  getProdutosByCozinha(): Observable<ProdutoModel[]>{
    const params = new HttpParams().append('categoria','COZINHA')
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto/produtos/categoria',{params});
  }

  getProdutosByBanheiro(): Observable<ProdutoModel[]>{
    const params = new HttpParams().append('categoria','BANHEIRO')
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto/produtos/categoria',{params});
  }

  getProdutosBySala(): Observable<ProdutoModel[]>{
    const params = new HttpParams().append('categoria','SALA')
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto/produtos/categoria',{params});
  }

  getProdutosByAreaExterna(): Observable<ProdutoModel[]>{
    const params = new HttpParams().append('categoria','AREAEXTERNA')
    return this.http.get<ProdutoModel[]>('http://localhost:8080/produto/produtos/categoria',{params});
  }
}
