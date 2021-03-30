import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtesaoComponent } from './artesao/artesao.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"",redirectTo:"entrar",pathMatch:"full"},
  {path:"entrar",component:EntrarComponent},
  {path:"cadastroProduto",component:CadastroProdutoComponent},
  {path:"menu",component:MenuComponent},
  {path:"artesao",component:ArtesaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
