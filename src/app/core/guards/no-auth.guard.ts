import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
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
        if(auth) {
          this.router.navigate(['dashboard']);
          return of(false)
        }
        
        return of(true);
      })
    );
  }  
}
