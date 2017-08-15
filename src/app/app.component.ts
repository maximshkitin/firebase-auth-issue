import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   userName: string;
   userEmail: string;
   isLoggedIn: boolean;
  
  constructor(private authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe( auth => {
      if (auth) {
        console.log(auth);
        this.isLoggedIn = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
      }
    })
  }
}
