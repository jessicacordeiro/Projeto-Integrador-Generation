import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(){
  }

  limparCarrinho(){
    this.items = this.cartService.clearCart();
  }

}
