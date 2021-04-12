import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../modal/ProdutoModel';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';
import { ProdutoModelService } from '../service/produto-model.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listProdutos: ProdutoModel[]
  product = ProdutoModel;
  

  constructor(
    private produtoService: ProdutoModelService ,
    private cartService : CartService
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
    
  }


  findAllProdutos(){
      
    this.produtoService.getAllProdutosModel().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }

}
