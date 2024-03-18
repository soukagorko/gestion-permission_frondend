import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

//
const BASIC_URL = ["http://localhost:8085/"];
//

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  //
  createDemande(demande: any): Observable<any>{
    return this.http.post(BASIC_URL + "api/demandes/create", demande);
  }
  //
   listAllDemandes(): Observable<any>{
    return this.http.get(BASIC_URL + "api/demandes/");
  }
  //
  deleteDemande(id: number): Observable<any>{
    return this.http.delete(BASIC_URL + "api/demandes/"+id);
  }
  //
  getDemandeById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "api/demandes/"+id);
  }
  //
  getDetailDemande(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "api/demandes/"+id);
  }
  //
  updateDemande(id: number, demande:any): Observable<any>{
    return this.http.put(BASIC_URL + "api/demandes/"+id, demande);
  }
  //
  imprimeDemande(id: number): Observable<Blob>{
    return this.http.get(BASIC_URL + "api/demandes/imprimer/"+id, {responseType: 'blob'});
  }
  //
  imprimePermission(id: number): Observable<Blob>{
    return this.http.get(BASIC_URL + "api/permissions/imprimer/"+id, {responseType: 'blob'});
  } 
//
}
