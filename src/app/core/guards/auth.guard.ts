import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIsAuthenticated();
  }

  private checkIsAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      switchMap(auth => {
        if(!auth) {
          this.router.navigate(['sign-in']);
          return of(false)
        }

        return of(true);
      })
    );
  }
  
}
