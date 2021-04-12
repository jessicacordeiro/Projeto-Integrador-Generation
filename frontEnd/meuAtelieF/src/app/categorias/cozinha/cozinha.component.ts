import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/modal/ProdutoModel';
import { CartService } from 'src/app/service/cart.service';
import { ProdutoModelService } from 'src/app/service/produto-model.service';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit {
  listProdutos: ProdutoModel[]

  constructor(
    private produtoService : ProdutoModelService,
    private cartService : CartService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findCozinha()
  }


  findCozinha(){
      
    this.produtoService.getProdutosByCozinha().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }


  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }
}
