import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ShadowComponent } from './componentes/shadow/shadow.component';
import { TableComponent } from './componentes/table/table.component';
import { TemplateComponent } from './componentes/template/template.component';
import { ButtonComponent } from './componentes/button/button.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { NavlateralComponent } from './componentes/navlateral/navlateral.component';
import { NotificationComponent } from './componentes/notification/notification.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ShadowComponent,
    TableComponent,
    TemplateComponent,
    ButtonComponent,
    FormsComponent,
    NavlateralComponent,
    NotificationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
