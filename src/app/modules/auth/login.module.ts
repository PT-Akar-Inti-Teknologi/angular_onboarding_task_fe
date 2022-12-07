import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LogoutPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
