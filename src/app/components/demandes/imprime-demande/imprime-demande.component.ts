import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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
// const BASIC_URL = ["http://localhost:8085/"];
//

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
  this.getDataDemandeById();
}
//
getDataDemandeById(){
  this.demandeService.getDemandeById(this.id).subscribe((res)=>{
    console.log(res);
    // this.detailDemandeForm.patchValue(res);
    this.router.navigateByUrl("/demandes/imprimer/{id}");
    // this.http.get(BASIC_URL + "api/demandes/imprimer"+id);
  })
}
//
imprimerDemandeOLL(){
  // this.demandeService.createDemande(this.postFormDemande.value).subscribe((res)=>{
  //  console.log(res);
  //  alert("NOUVELLE DEMANDE ENREGISTREE AVEC SUCCES !");
  this.demandeService.getDemandeById(this.id).subscribe((res)=>{
    console.log(res);
   this.router.navigateByUrl("/demandes/imprimer/{id}");
 })
}

}
