import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaAceitas } from '../modal/enum/CategoriaAceitas';
import { ProdutoModel } from '../modal/ProdutoModel';
import { ProdutoModelService } from '../service/produto-model.service';
import { UsuarioModelService } from '../service/usuario-model.service';

@Component({
  selector: 'app-conta-artesao',
  templateUrl: './conta-artesao.component.html',
  styleUrls: ['./conta-artesao.component.css']
})
export class ContaArtesaoComponent implements OnInit {

  produtoModel: ProdutoModel = new ProdutoModel()
  listaProdutos: ProdutoModel[]
  id= environment.id
  myform : FormGroup
  nome:string
  

  
  constructor(
    private router: Router,
    private usuarioModelService: UsuarioModelService,
    private formbuilder :  FormBuilder,
    private produtoService: ProdutoModelService 
      
    
    
  
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.myform = this.formbuilder.group({
      categorias : [null],
      nomeProduto : [null],
      descricaoProduto : [null],
      precoProduto : [null],
      quantidadeProduto : [null],
      imagemProduto : [null]
    })
  }

  cadastrar(){
    this.usuarioModelService.postProdutoModel(this.produtoModel).subscribe((resp: ProdutoModel)=>{
      this.produtoModel = resp 
      this.reset()

      alert('Produto cadastrado com sucesso!')
    })
  }


  reset() {
      this.myform.reset();
    
  }
  findByNome(){
    
      this.produtoService.getProdutosByNome(this.nome).subscribe((resp: ProdutoModel[]) => {
        this.listaProdutos = resp
      })
  
    }
  }