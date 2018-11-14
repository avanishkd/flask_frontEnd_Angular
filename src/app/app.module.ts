import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApComponent } from './ap/ap.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { BookshowComponent } from './bookshow/bookshow.component';
import { FooterComponent } from "src/app/footer/footer.component";
import { ServicesComponent } from './services/services.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PaymentComponent } from './payment/payment.component';
import { SocialComponent } from './social/social.component';
import { BuyerlandComponent } from './buyerland/buyerland.component';
import { SellerlandComponent } from './sellerland/sellerland.component';
import { Showbook1Component } from './showbook1/showbook1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SelleraddbookComponent } from './selleraddbook/selleraddbook.component';
import { CheckPasswordDirective } from './ap/check-password.directive';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
  VkontakteLoginProvider,
} from "angular-6-social-login-v2";
import { Social2Component } from './social2/social2.component';
import { SellerupdatebookComponent } from './sellerupdatebook/sellerupdatebook.component';
import { OrderConfirmComponent } from "src/app/order-confirm/order-confirm.component";



export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("Your-Facebook-app-id")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("570409364762-vs9m2t6o7j8322tgjilt83bvvqbfqcru.apps.googleusercontent.com")
      },
      {
        id: VkontakteLoginProvider.PROVIDER_ID,
        provider: new VkontakteLoginProvider("Your-VK-Client-Id")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SocialLoginModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    ForgotpasswordComponent,
    FeedbackComponent,
    ApComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    BookshowComponent,
    FooterComponent,
    ServicesComponent,
    CheckPasswordDirective,
    PaymentComponent,
    SocialComponent,
    Social2Component,
    BuyerlandComponent,
    SellerlandComponent,
    Showbook1Component,
    CarouselComponent,
    WishlistComponent,
    OrderConfirmComponent,
    SelleraddbookComponent,
    SellerupdatebookComponent,

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  entryComponents: [
    SignupComponent,
    LoginComponent // material
  ],
  bootstrap: [AppComponent]
})





export class AppModule { }

