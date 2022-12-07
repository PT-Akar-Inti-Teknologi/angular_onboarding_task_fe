import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserInformation, UserModel } from 'src/app/shared/interfaces/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private linkUserModel = 'https://6147e05c65467e0017384c29.mockapi.io/api/users';

  constructor(
    private http: HttpClient
  ) { }

  onSignIn(params: {email: string, password: string, token?: string }): Observable<UserModel>{
    return this.http.get<UserModel[]>(this.linkUserModel).pipe(
      map(res => {
        
        const findUser = res.find(el => { 
          
          if(params.token !== undefined || params.token !== null){
            return el.email === params.email && el.token === params.token 
          }

          return el.email === params.email && el.password === params.password
        });

        if(findUser !== undefined) {
          
          const params: UserInformation = {
            email: findUser.email,
            name: findUser.name,
            avatar: findUser.avatar,
            token: findUser.token
          }

          this.userInformation = params;
        }
        
        return findUser as UserModel;
      })
    );
  }

  set userInformation(params: UserInformation){
    const stringifyUser = JSON.stringify(params);
    sessionStorage.setItem("userInformation", stringifyUser);
  }
}
