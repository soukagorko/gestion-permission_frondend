import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth/auth.service';
import { DemandeService } from 'src/app/service/demandes/demande.service';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css']
})
export class CreateDemandeComponent implements OnInit {
   //
   postFormDemande!: FormGroup;
   //
  matricule: string = '';
  prenom: string = '';
  nom: string = '';
  grade: string = '';
  service: string = '';
  lieu: string = '';
  destinatairePermission: string = '';
  objet: string = '';
  motif: string = '';
  destination: string = '';
  // dateDebut: string = '';
  dureePermission: number = 0;
  // dateFin: string = '';
  dateDebut!: string | number | Date;
  dateFin!: string | number | Date;

   //
   constructor(private demandeService: DemandeService,
               private fb: FormBuilder,
               private router: Router,
              public authService: AuthService) {
   }

   //
   ngOnInit(){
     this.postFormDemande = this.fb.group({
      matricule:[null, Validators.required],
      prenom:[null, Validators.required],
      nom:[null, Validators.required],
      service:[null, Validators.required],
      grade:[null, Validators.required],
      destinatairePermission:[null, Validators.required],
      dureePermission:[null, Validators.required],
      lieu:[null, Validators.required], 
      dateDebut:[null, Validators.required],
      objet:[null, Validators.required],
      motif:[null, Validators.required],
      destination:[null, Validators.required]
     })
     //
   }
   //
   saveDemande(){
      this.demandeService.createDemande(this.postFormDemande.value).subscribe((res)=>{
       console.log(res);
       alert("NOUVELLE DEMANDE ENREGISTREE AVEC SUCCES !");
       this.router.navigateByUrl("/demandes");
     })
   }

   //
}
