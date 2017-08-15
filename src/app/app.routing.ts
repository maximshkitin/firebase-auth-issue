import { Router, Route } from "@angular/router";

import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { EmailComponent } from '../app/components/email/email.component';
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";

import { AuthGuard } from "../app/services/auth-guard.service";

export const routerConfig: Route[] = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'email', component: EmailComponent },
    { path: 'signup', component: SignupComponent },
]