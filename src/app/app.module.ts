import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CreateDemandeComponent,
} from './components/demandes/create-demande/create-demande.component';
import {
  EditDemandeComponent,
} from './components/demandes/edit-demande/edit-demande.component';
import {
  ListDemandeComponent,
} from './components/demandes/list-demande/list-demande.component';
import { DetailDemandeComponent } from './components/demandes/detail-demande/detail-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDemandeComponent,
    ListDemandeComponent,
    EditDemandeComponent,
    DetailDemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
