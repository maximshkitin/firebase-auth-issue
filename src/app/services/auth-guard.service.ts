import { Injectable }               from "@angular/core";
import { Router, CanActivate }      from "@angular/router";
import { Observable }               from "rxjs/observable";
import "rxjs/Rx";
import { AngularFireAuth }          from "angularfire2/auth";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.auth.authState
        .take(1)
        .map( state => !!state )
        .do( authenticated => {
            if (!authenticated) 
                this.router.navigateByUrl('/login')
        });
    }
}