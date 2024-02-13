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
// detailDemandeForm! : FormGroup;
pdfDemandeForm! : FormGroup;
imprimeDemandeForm! : FormGroup;
//
constructor(private activatedRoute: ActivatedRoute,
            private demandeService: DemandeService,
            private fb:FormBuilder,
            private router: Router){}

//
ngOnInit(){
  //
  // this.imprimeDemandeForm = this.fb.group({
    this.pdfDemandeForm = this.fb.group({
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
    this.imprimeDemandeForm.patchValue(res);
    // this.detailDemandeForm.patchValue(res);
  })
}
//
printPage(){
  window.print();
}
//
genererPDF(){
  this.demandeService.getPDF(this.id).subscribe((res)=>{
    console.log(res);
    this.pdfDemandeForm.patchValue(res);
  })
}
//

}
