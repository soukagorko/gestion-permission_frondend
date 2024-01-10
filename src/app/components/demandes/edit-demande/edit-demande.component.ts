import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { DemandeService } from 'src/app/service/demandes/demande.service';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  //
  id:number=this.activatedRoute.snapshot.params['id'];
  //
  putDemandeForm! : FormGroup;
  //
  constructor(private activatedRoute: ActivatedRoute,
              private demandeService: DemandeService,
              private fb:FormBuilder,
              private router: Router)
              {}

  //
  ngOnInit(){
    //
    this.putDemandeForm = this.fb.group({
      typePermission:[null, Validators.required],
      dureePermission:[null, Validators.required],
      dateDemande:[null, Validators.required],
      dateDebut:[null, Validators.required],
      dateFin:[null, Validators.required],
      libelle:[null, Validators.required]
    })
    //
    this.getDataDemandeById();
  }
  //
  getDataDemandeById(){
    this.demandeService.getDemandeById(this.id).subscribe((res)=>{
      console.log(res);
      this.putDemandeForm.patchValue(res);
    })
  }
  //
  updateDataDemande(){
    this.demandeService.updateDemande(this.id, this.putDemandeForm.value).subscribe((res)=>{
      console.log(res);
      alert("DONNEES DEMANDE MODIFIEES AVEC SUCCES !");
      this.router.navigateByUrl("/demandes")
    })
  }
  //

}
