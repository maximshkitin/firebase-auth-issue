import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;

  notLogged;

  user;

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
    this.user = afAuth.authState.subscribe( user => {
      console.log(user)
    })
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginFb() {
    this.authService.loginFb();
  }

  ngOnInit() {
    
  }


}
