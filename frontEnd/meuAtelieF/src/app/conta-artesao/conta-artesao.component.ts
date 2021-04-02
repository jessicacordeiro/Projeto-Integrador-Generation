import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaAceitas } from '../modal/enum/CategoriaAceitas';
import { ProdutoModel } from '../modal/ProdutoModel';
import { UsuarioModelService } from '../service/usuario-model.service';

@Component({
  selector: 'app-conta-artesao',
  templateUrl: './conta-artesao.component.html',
  styleUrls: ['./conta-artesao.component.css']
})
export class ContaArtesaoComponent implements OnInit {

  produtoModel: ProdutoModel = new ProdutoModel()
  listaProdutos: ProdutoModel[]

  constructor(
    private router: Router,
    private usuarioModelService: UsuarioModelService
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
  }

  cadastrar(){
    this.usuarioModelService.postProdutoModel(this.produtoModel).subscribe((resp: ProdutoModel)=>{
      this.produtoModel = resp 
      alert('Produto cadastrado com sucesso!')
    })
  }
}
