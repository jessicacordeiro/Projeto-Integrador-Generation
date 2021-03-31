import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { ContaArtesaoComponent } from './conta-artesao/conta-artesao.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'conta-artesao', component: ContaArtesaoComponent},
  {path:'desenvolvedores', component: DesenvolvedoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
