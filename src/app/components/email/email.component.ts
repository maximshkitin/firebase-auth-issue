import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  email: string;
  password: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginEmail() {
    // e.preventDefault();
    this.authService.loginEmail(this.email, this.password)
  }

}
