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
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {

//
id:number=this.activatedRoute.snapshot.params['id'];
//
detailDemandeForm! : FormGroup;
//
constructor(private activatedRoute: ActivatedRoute,
            private demandeService: DemandeService,
            private fb:FormBuilder,
            private router: Router){}

//
ngOnInit(){
  //
  this.detailDemandeForm = this.fb.group({
    typePermission:[null, Validators.required],
    dureePermission:[null, Validators.required],
    datePermission:[null, Validators.required],
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
    this.detailDemandeForm.patchValue(res);
  })
}


}
