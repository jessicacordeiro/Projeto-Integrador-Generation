import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../modal/ProdutoModel';
import { AuthService } from '../service/auth.service';
import { ProdutoModelService } from '../service/produto-model.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listProdutos: ProdutoModel[]
  constructor(
    private router: Router,
    private produtoService: ProdutoModelService ,
    private authService:AuthService,
  ) { }

  ngOnInit(){
    this.findAllProdutos()
  }


  findAllProdutos(){
      
    this.produtoService.getAllProdutosModel().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }

}
