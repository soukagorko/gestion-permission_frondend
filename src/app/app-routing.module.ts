import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

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
import {
  NotAuthorizedComponent,
} from './components/not-authorized/not-authorized.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
// Declarer les routes
  //ROUTES ROLE
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "admin", component: AdminTemplateComponent, canActivate: [AuthenticationGuard], 
    children :
      [
        { path: "demandes", component: ListDemandeComponent},
        { path: "demandes/create", component: CreateDemandeComponent, canActivate: [AuthenticationGuard], data:{role:"ADMIN"}},
        { path: "demandes/edit/:id", component: EditDemandeComponent},
        { path: "demandes/detail/:id", component: DetailDemandeComponent},
        //
        { path: "notAuthorized", component: NotAuthorizedComponent},

      ]
    },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
