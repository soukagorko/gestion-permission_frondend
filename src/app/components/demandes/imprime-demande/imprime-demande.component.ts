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
  selector: 'app-imprime-demande',
  templateUrl: './imprime-demande.component.html',
  styleUrls: ['./imprime-demande.component.css']
})
export class ImprimeDemandeComponent implements OnInit {

  //
id:number=this.activatedRoute.snapshot.params['id'];
//
imprimeDemandeForm! : FormGroup;
//
constructor(private activatedRoute: ActivatedRoute,
            private demandeService: DemandeService,
            private fb:FormBuilder,
            private router: Router){}

//
ngOnInit(){
  //
  this.imprimeDemandeForm = this.fb.group({
    //
    matricule:[null, Validators.required],
      prenom:[null, Validators.required],
      nom:[null, Validators.required],
      service:[null, Validators.required],
      grade:[null, Validators.required],
      dureePermission:[null, Validators.required],
      dateDebut:[null, Validators.required],
      motif:[null, Validators.required],
      destination:[null, Validators.required]
      //
  })
  //
  this.imprimeDataDemandeById();
}
//
imprimeDataDemandeById(){
  this.demandeService.getDemandeById(this.id).subscribe((res)=>{
    console.log(res);
    this.imprimeDemandeForm.patchValue(res);
  })
}
//

}
