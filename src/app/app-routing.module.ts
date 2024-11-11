import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarComponent } from './components/editar/editar.component';
import { HeaderComponent} from './components/header/header.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AdicionarUserComponent } from './components2/adicionar-user/adicionar-user.component';
import { EditarUserComponent } from './components2/editar-user/editar-user.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path: 'produtos', component: ProdutosComponent },
  {path: 'editar/:id', component: EditarComponent},
  {path: 'cabeca/new', component: HeaderComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path:'funcionarios', component: FuncionariosComponent},
  {path:'adicionar-user', component:AdicionarUserComponent},
  {path:'editar-user/:id', component:EditarUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
