import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertPDFPayementComponent } from './alert-pdfpayement/alert-pdfpayement.component';
import { PoupPackForServicesComponent } from './poup-pack-for-services/poup-pack-for-services.component';
import { DetailsPackComponent } from './details-pack/details-pack.component';
import { VideoPackComponent } from './video-pack/video-pack.component';
import { AlertAttentionPackComponent } from './alert-attention-pack/alert-attention-pack.component';
import { SwiperModule } from 'swiper/angular';
import { AProposComponent } from './a-propos/a-propos.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { VideoPubliciteServiceComponent } from './video-publicite-service/video-publicite-service.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationEmailComponent } from './verification-email/verification-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BlocageClientComponent } from './blocage-client/blocage-client.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxIntlTelInputModule,
    SwiperModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AlertPDFPayementComponent,
    PoupPackForServicesComponent,
    VideoPackComponent,
    AlertAttentionPackComponent,
    AProposComponent,
    VideoPubliciteServiceComponent,
    ForgetPasswordComponent,
    VerificationEmailComponent,
    ChangePasswordComponent,
    BlocageClientComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
