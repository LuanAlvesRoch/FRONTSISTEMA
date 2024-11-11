import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditarComponent } from './components/editar/editar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';

import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AdicionarUserComponent } from './components2/adicionar-user/adicionar-user.component';
import { EditarUserComponent } from './components2/editar-user/editar-user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CategoriasComponent,
    EditarComponent,
    HeaderComponent,
    AdicionarComponent,
    FuncionariosComponent,
    AdicionarUserComponent,
    EditarUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule // Adicionando Font AwesomeModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // Novo método
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
