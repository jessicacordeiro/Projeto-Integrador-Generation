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
  produto: ProdutoModel
  produtoModel2: ProdutoModel = new ProdutoModel()
  nomeProduto : string = '';
  

  constructor(
    private router: Router,
    private usuarioModelService: UsuarioModelService,
    private formbuilder :  FormBuilder,
    private produtoService: ProdutoModelService ,
    private authService : AuthService
    ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.findByIdUser()
    this.findByProdutos()

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

    findById(idProduto: number){
      this.produtoService.getProdutoById(idProduto).subscribe((resp: ProdutoModel) => {
        this.produto = resp
        console.log(idProduto)
        console.log(resp)
      })
    }

    editar(){
      this.produtoService.putProduto(this.produtoModel).subscribe((resp: ProdutoModel) => {
        this.produtoModel = resp
      })
    }

    apagar(idproduto: number){
      this.produtoService.deleteProduto(idproduto,environment.id).subscribe((resp:ProdutoModel)=>{
        this.produtoModel = resp 
      })
    }

    findByProdutos(){
      if(this.nomeProduto == ''){
        this.findByIdUser()
      } else {
        this.produtoService.getProdutosByNome(this.nomeProduto).subscribe((resp: ProdutoModel[])=>{
          this.user.meusProdutos = resp
          console.log(this.nomeProduto)
          
        })
      }
  
    }



  }