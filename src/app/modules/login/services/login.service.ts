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

  onSignIn(params: {email: string, password: string }): Observable<UserModel>{
    return this.http.get<UserModel[]>(this.linkUserModel).pipe(
      map(res => {
        
        const findUser = res.find(el => el.email === params.email && el.password === params.password);

        if(findUser !== undefined) {
          
          const params: UserInformation = {
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
    localStorage.setItem("userInformation", stringifyUser);
  }
}
