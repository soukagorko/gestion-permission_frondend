import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-form-demande',
  templateUrl: './form-demande.component.html',
  styleUrls: ['./form-demande.component.css']
})
export class FormDemandeComponent implements OnInit {

  //
  contactForm!:FormGroup;
 
  services = [
    { id: 1, name: "SP CSA" },
    { id: 2, name: "BS" },
    { id: 3, name: "B1" },
    { id: 4, name: "B2" },
    { id: 5, name: "B3" },
    { id: 6, name: "CMP/AIBD"}
  ];
 
  constructor(private fb:FormBuilder) {
  }
 
  ngOnInit() {
 
    this.contactForm = this.fb.group({
      service: [null]
    });
  }
 
  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }
  //

  //
printPage(){
  window.print();
}

}
