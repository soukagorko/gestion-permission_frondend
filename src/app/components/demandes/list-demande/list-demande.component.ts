import {
  Component,
  OnInit,
} from '@angular/core';

import { DemandeService } from 'src/app/service/demandes/demande.service';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  //
  dataDemandes:any = [];
  //
  constructor(private demandeService: DemandeService){}
  //
  ngOnInit(){
    this.getAllDataDemandes();
  }
  //
  getAllDataDemandes(){
    this.demandeService.listAllDemandes().subscribe((res)=>{
      console.log(res);
      this.dataDemandes = res;
    })
  }
  //
  deleteDemande(id:number){
    console.log(id);
    this.demandeService.deleteDemande(id).subscribe((res)=>{
      console.log(res);
      this.getAllDataDemandes();
  })
}
//

}
