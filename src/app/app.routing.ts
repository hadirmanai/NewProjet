import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationEmailComponent } from './verification-email/verification-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BlocageClientComponent } from './blocage-client/blocage-client.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)
  }]},
  {
    path: 'dashboard',
    redirectTo: 'dashboard'
  },
  {  path: 'login',component: LoginComponent,
  },
    
  {  path: 'register',component: RegisterComponent,
  },
  {  path: 'payment',component: PaymentComponent,
  },
  {  path: 'verification',component: ForgetPasswordComponent,
  },
  {  path: 'code',component: VerificationEmailComponent,
  },
  {  path: 'password',component:  ChangePasswordComponent,
  },
  {  path: 'blocage',component:  BlocageClientComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
