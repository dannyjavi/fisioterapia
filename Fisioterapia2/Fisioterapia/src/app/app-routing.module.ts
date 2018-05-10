import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ButtonComponent } from './componentes/button/button.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ShadowComponent } from './componentes/shadow/shadow.component';
import { TableComponent } from './componentes/table/table.component';
import { TemplateComponent } from './componentes/template/template.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'shadow', component: ShadowComponent},
  {path: 'table', component: TableComponent},
  {path: 'template', component: TemplateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
