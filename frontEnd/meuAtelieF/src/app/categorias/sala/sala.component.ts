import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/modal/ProdutoModel';
import { CartService } from 'src/app/service/cart.service';
import { ProdutoModelService } from 'src/app/service/produto-model.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  listProdutos: ProdutoModel[]

  constructor(
    private produtoService : ProdutoModelService,
    private cartService : CartService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findSala()
  }


  findSala(){
      
    this.produtoService.getProdutosBySala().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }


  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }
}
