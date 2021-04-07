import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../modal/ProdutoModel';
import { AuthService } from '../service/auth.service';
import { ProdutoModelService } from '../service/produto-model.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listProdutos: ProdutoModel[]

  constructor(
    private router: Router,
    private produtoService: ProdutoModelService ,
    private authService:AuthService,
    
  ) { }

  ngOnInit() {
    this.findAllProdutos()
    
  }


  findAllProdutos(){
      
    this.produtoService.getAllProdutosModel().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }


}
