import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authservice: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.authservice.logout();
    // this.router.navigateByUrl("/login");
  }

}
