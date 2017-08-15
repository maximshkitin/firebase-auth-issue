import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from "../../../app/app.component";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;
  email: string;

  constructor(private authService: AuthService, app: AppComponent ) {
    this.username = app.userName;
    this.email = app.userEmail
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
