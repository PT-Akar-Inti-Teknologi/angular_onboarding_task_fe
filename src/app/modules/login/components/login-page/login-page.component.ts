/* create component for login page */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationsHelpers } from 'src/app/core/helper/validation-helper';
import { LoginService } from '../../services/login.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  loginSubscription: Subscription = new Subscription;

  loginSubmit = false;
  loadingSpinner = false;
  errUserNotFound = false;  

  getMessageError = ValidationsHelpers.getErrorValidation;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }  

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  onSubmit(){
    this.loginSubmit = true;

    if(this.loginForm.valid){
      const params = {
        email : this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      
      this.loadingSpinner = true;
      
      this.loginSubscription = this.loginService.onSignIn(params).subscribe(res => {
        this.errUserNotFound = res === undefined ? true : false;
      }, err => {
        alert(err.error);
      }, () => {
        this.loadingSpinner = false;
      });

    }
    
  }

  hasErrors(fcName: string): boolean{
    return ValidationsHelpers.getStatusError(this.loginSubmit, this.loginForm, fcName);
  }

}
