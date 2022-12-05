/* create component for login page */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ValidationsHelpers } from 'src/app/core/helper/validation-helper';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  loginSubmit = false;

  getMessageError = ValidationsHelpers.getErrorValidation;

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  

  onSubmit(){
    this.loginSubmit = true;
  }

  hasErrors(fcName: string): boolean{
    return ValidationsHelpers.getStatusError(this.loginSubmit, this.loginForm, fcName);
  }

}
