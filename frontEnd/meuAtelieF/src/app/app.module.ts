import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { ContaArtesaoComponent } from './conta-artesao/conta-artesao.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    CadastrarComponent,
    RodapeComponent,
    DesenvolvedoresComponent,
    ContaArtesaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
