import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

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
  FormDemandeComponent,
} from './components/demandes/form-demande/form-demande.component';
import {
  ImprimeDemandeComponent,
} from './components/demandes/imprime-demande/imprime-demande.component';
import {
  ListDemandeComponent,
} from './components/demandes/list-demande/list-demande.component';

const routes: Routes = [
// Declarer les routes
  //ROUTES ROLE
  { path: "demandes", component: ListDemandeComponent},
  { path: "demandes/create", component: CreateDemandeComponent},
  { path: "demandes/edit/:id", component: EditDemandeComponent},
  { path: "demandes/detail/:id", component: DetailDemandeComponent},
  //
  { path: "demandes/form", component: FormDemandeComponent},
  //
  { path: "demandes/imprime/:id", component: ImprimeDemandeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
