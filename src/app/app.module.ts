import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AdminTemplateComponent,
} from './components/admin-template/admin-template.component';
import { LoginComponent } from './components/auth/login/login.component';
import {
  CreateDemandeComponent,
} from './components/demandes/create-demande/create-demande.component';
import {
  DetailDemandeComponent,
} from './components/demandes/detail-demande/detail-demande.component';
import {
  EditDemandeComponent,
} from './components/demandes/edit-demande/edit-demande.component';
import {
  ListDemandeComponent,
} from './components/demandes/list-demande/list-demande.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDemandeComponent,
    ListDemandeComponent,
    EditDemandeComponent,
    DetailDemandeComponent,
    LoginComponent,
    AdminTemplateComponent,
    NavbarComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AppHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
