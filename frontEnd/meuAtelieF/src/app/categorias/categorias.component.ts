import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../modal/ProdutoModel';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';
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
    private cartService : CartService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
  }


  findAllProdutos(){
      
    this.produtoService.getAllProdutosModel().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }


  findSala(){
      
    this.produtoService.getProdutosByQuarto().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }

}
