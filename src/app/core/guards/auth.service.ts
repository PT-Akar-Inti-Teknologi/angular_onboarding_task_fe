import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserInformation } from 'src/app/shared/interfaces/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get userInformation(): UserInformation{
    const getUser = JSON.parse(sessionStorage.getItem("userInformation")!);
    return getUser as UserInformation;
  }

  isAuthenticated(): Observable<boolean> {
    if(this.userInformation !== null || this.userInformation !== undefined){
      return of(true);
    }

    return of(false);
  }
}