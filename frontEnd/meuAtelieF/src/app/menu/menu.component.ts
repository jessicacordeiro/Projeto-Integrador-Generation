import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../modal/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioModel : UsuarioModel= new UsuarioModel
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router : Router
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

}
