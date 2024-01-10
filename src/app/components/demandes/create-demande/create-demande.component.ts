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

import { DemandeService } from 'src/app/service/demandes/demande.service';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css']
})
export class CreateDemandeComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

   //
   postFormDemande!: FormGroup;
   //
   dateDemande = new Date();
   //
   constructor(private demandeService: DemandeService,
               private fb: FormBuilder,
               private router: Router) {
   }
   //
   ngOnInit(){
     this.postFormDemande = this.fb.group({
      typePermission:[null, Validators.required],
      dureePermission:[null, Validators.required],
      // dateDemande:[null, Validators.required],
      dateDebut:[null, Validators.required],
      dateFin:[null, Validators.required],
      libelle:[null, Validators.required]
     })
   }
   //
   saveNewDemande(){
     //
     this.demandeService.createDemande(this.postFormDemande.value).subscribe((res)=>{
       console.log(res);
       alert("NOUVELLE DEMANDE ENREGISTREE AVEC SUCCES !");
       this.router.navigateByUrl("/demandes");
     })
   }
   //

}
