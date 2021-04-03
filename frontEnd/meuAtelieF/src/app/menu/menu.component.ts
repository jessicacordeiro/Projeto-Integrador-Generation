import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../modal/UsuarioLogin';
import { UsuarioModel } from '../modal/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioModel : UsuarioModel= new UsuarioModel
  usuarioLogin : UsuarioLogin = new UsuarioLogin
  confirmarSenha: string
  nome = environment.usuario
  id = environment.id
  token = environment.token
  

  constructor(
    private authService: AuthService,
    private auth: AuthService,
    private router : Router,
    public auth2 : AuthService
  ) { }

 

  ngOnInit() {
    window.scroll(0,0)

  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }


  cadastrar(){

    if(this.usuarioModel.senha == this.confirmarSenha){
     this.authService.cadastrar(this.usuarioModel).subscribe((resp: UsuarioModel)=>{
      this.usuarioModel = resp
      this.router.navigate(['/home'])
      alert('Usuário cadastrado com sucesso')
     })

    }
    else{
      alert('Senhas estão incorretas')
    
    }
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin =  resp
      localStorage.setItem('token', this.usuarioLogin.token)
      localStorage.setItem('id', JSON.stringify(this.usuarioLogin.id))
      alert('Usuário logado')

      environment.usuario = this.usuarioLogin.usuario
      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id
      this.nome = environment.usuario
      console.log(environment.id)

      this.router.navigate(['/home'])
    }, erro =>{
      if(erro.status == 500){
        alert('erro no login')
      }
    })
  }

  sair() {
    localStorage.clear()
    this.router.navigate(['/home'])
    environment.id=0
    environment.token=''
    environment.usuario=''
  
    alert('Você foi deslogado')
  }

}
