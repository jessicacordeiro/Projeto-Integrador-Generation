import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaAceitas } from '../modal/enum/CategoriaAceitas';
import { ProdutoModel } from '../modal/ProdutoModel';
import { UsuarioModel } from '../modal/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { ProdutoModelService } from '../service/produto-model.service';
import { UsuarioModelService } from '../service/usuario-model.service';

@Component({
  selector: 'app-conta-artesao',
  templateUrl: './conta-artesao.component.html',
  styleUrls: ['./conta-artesao.component.css']
})
export class ContaArtesaoComponent implements OnInit {

  produtoModel: ProdutoModel = new ProdutoModel()
  listProdutos: ProdutoModel[]
  id= environment.id
  myform : FormGroup
  nome:string
  nome2 : string
  listaProdutos: ProdutoModel[]
  user : UsuarioModel = new UsuarioModel()
  
  
  
  
  constructor(
    private router: Router,
    private usuarioModelService: UsuarioModelService,
    private formbuilder :  FormBuilder,
    private produtoService: ProdutoModelService ,
    private authService : AuthService
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.findByIdUser()

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
      alert('Produto cadastrado com sucesso!')
      this.produtoModel = new ProdutoModel()
      this.findByIdUser()
      this.reset()
    })
  }


  reset() {
      this.myform.reset();
    
  }
 
    findAllProdutos(){
      
      this.produtoService.getAllProdutosModel().subscribe((resp :ProdutoModel[])=>{
      this.listProdutos = resp

      })
    }



    findByNome2(){
      this.produtoService.getProdutosByNome(this.nome2).subscribe((resp: ProdutoModel[]) => {
        this.listaProdutos = resp
        console.log(this.nome2)
        alert('Chama no deu bom')
      })
  
    }

    findByIdUser(){
      this.authService.getByIdUser().subscribe((resp: UsuarioModel) => {
        this.user = resp
      })
    }




    findByNome(){
    
      this.produtoService.getProdutosByNome(this.nome2).subscribe((resp: ProdutoModel[]) => {
        this.listaProdutos = resp
        console.log(this.nome2)
        alert('Chama no deu bom')
      })
  
    }
  }