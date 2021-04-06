import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../modal/ProdutoModel';
import { UsuarioModel } from '../modal/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { ProdutoModelService } from '../service/produto-model.service';
import { UsuarioModelService } from '../service/usuario-model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtoModel: ProdutoModel = new ProdutoModel()
  listProdutos: ProdutoModel[]
  id= environment.id
  nome:string
  nome2 : string
  listaProdutos: ProdutoModel[]
  user : UsuarioModel = new UsuarioModel()
  usuarioModel : UsuarioModel= new UsuarioModel
  confirmarSenha: string
  myform : FormGroup

  constructor(
    private router: Router,
    private produtoService: ProdutoModelService ,
    private authService: AuthService,
    private formbuilder :  FormBuilder
    
    
  ) { }

  ngOnInit()  {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.findAllProdutos()


    this.myform = this.formbuilder.group({
      nomeCompleto : [null],
      endereco : [null],
      cpf : [null],
      nomeUsuario : [null],
      email : [null],
      senha : [null]
    })
    
  
  }


  findAllProdutos(){
      
    this.produtoService.getAllProdutosModel().subscribe((resp :ProdutoModel[])=>{
    this.listProdutos = resp

    })
  }

  cadastrar(){

    if(this.usuarioModel.senha == this.confirmarSenha){
     this.authService.cadastrar(this.usuarioModel).subscribe((resp: UsuarioModel)=>{
      this.usuarioModel = resp
      this.reset()
      this.router.navigate(['/home'])
      alert('Usuário cadastrado com sucesso')
     })

    }
    else{
      alert('Senhas estão incorretas')
    
    }
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  reset() {
    this.myform.reset();
  
}


}
