import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/modal/ProdutoModel';
import { CartService } from 'src/app/service/cart.service';
import { ProdutoModelService } from 'src/app/service/produto-model.service';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {
  listProdutos: ProdutoModel[]

  constructor(
    private produtoService : ProdutoModelService,
    private cartService : CartService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findQuarto()
  }


  findQuarto(){
      
    this.produtoService.getProdutosByQuarto().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }

  
}
