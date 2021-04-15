import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProdutoModel } from '../modal/ProdutoModel';
import { UsuarioModel } from '../modal/UsuarioModel';
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
  stringPesquisa: string
  user : ProdutoModel

  

  constructor(
    private produtoService: ProdutoModelService ,
    private cartService : CartService,
    private router : Router,
    private route : ActivatedRoute
    
  ) { 
    router.events.subscribe((e) => {

      if (e instanceof NavigationEnd) {
        route.params.subscribe(p => {
          this.stringPesquisa = p.nome
        })

        this.BuscarProdutos(this.stringPesquisa)
      }

    })

  }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
    this.stringPesquisa = ""
    
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

  BuscarProdutos(nome: string) {
      if (this.stringPesquisa != undefined) {
        this.produtoService.getProdutosByNome(nome).subscribe((resp: ProdutoModel[]) => {
          this.listProdutos = resp
        })

      } else {
        this.produtoService.getAllProdutosModel().subscribe((resp: ProdutoModel[]) => {
          this.listProdutos = resp
        })
      }

    
  }


}
