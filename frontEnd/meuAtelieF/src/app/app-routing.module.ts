import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AreaExternaComponent } from './categorias/area-externa/area-externa.component';
import { BanheiroComponent } from './categorias/banheiro/banheiro.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CozinhaComponent } from './categorias/cozinha/cozinha.component';
import { QuartoComponent } from './categorias/quarto/quarto.component';
import { SalaComponent } from './categorias/sala/sala.component';
import { ContaArtesaoComponent } from './conta-artesao/conta-artesao.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { EditComponent } from './edit/edit.component';
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
  {path:'desenvolvedores', component: DesenvolvedoresComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'cozinha', component: CozinhaComponent},
  {path:'sala', component: SalaComponent},
  {path:'banheiro', component: BanheiroComponent},
  {path:'areaExterna', component: AreaExternaComponent},
  {path:'quarto', component: QuartoComponent},
  {path:'produtos/search/:nome', component: ProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
