import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../modal/ProdutoModel';
import { ProdutoModelService } from '../service/produto-model.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  produto : ProdutoModel = new ProdutoModel()

  constructor(
    private produtoService : ProdutoModelService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.FindByIdProduto(id)
  }

  FindByIdProduto(id : number){
    this.produtoService.getProdutoById(id).subscribe((resp : ProdutoModel)=>{
      this.produto = resp
    })
  }

  atualizar(){
    this.produtoService.putProduto(this.produto).subscribe((resp : ProdutoModel)=>{
      this.produto = resp
      alert('Produto atualizado')
      this.router.navigate(['/conta-artesao'])
    })
  }

}
