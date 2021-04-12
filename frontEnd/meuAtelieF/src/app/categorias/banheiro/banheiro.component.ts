import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/modal/ProdutoModel';
import { CartService } from 'src/app/service/cart.service';
import { ProdutoModelService } from 'src/app/service/produto-model.service';

@Component({
  selector: 'app-banheiro',
  templateUrl: './banheiro.component.html',
  styleUrls: ['./banheiro.component.css']
})
export class BanheiroComponent implements OnInit {
  listProdutos: ProdutoModel[]

  constructor(
    private produtoService : ProdutoModelService,
    private cartService : CartService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findBanheiro()
  }


  findBanheiro(){
      
    this.produtoService.getProdutosByBanheiro().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }


  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }
}

