import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApComponent } from './ap/ap.component';
import { BookshowComponent } from './bookshow/bookshow.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { AppComponent } from './app.component';
import { SignupComponent } from "src/app/signup/signup.component";
import { BuyerlandComponent } from "src/app/buyerland/buyerland.component";
import { Showbook1Component } from "src/app/showbook1/showbook1.component";
import { CarouselComponent } from "src/app/carousel/carousel.component";
import { SelleraddbookComponent } from "src/app/selleraddbook/selleraddbook.component";
import { SellerlandComponent } from "src/app/sellerland/sellerland.component";
import { SellerupdatebookComponent } from "src/app/sellerupdatebook/sellerupdatebook.component";
import { OrderConfirmComponent } from "src/app/order-confirm/order-confirm.component";



const routes: Routes = [


  {
    path: 'orderconf',
    component: OrderConfirmComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'selleradd',
    component: SelleraddbookComponent
  },
  {
    path: 'sellerupdate',
    component: SellerupdatebookComponent
  },
  {
    path: 'main',
    component: ApComponent
  },
  {
    path: 'bookshow',
    component: BookshowComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  }
  ,
  {
    path: 'footer',
    component: FooterComponent
  }
  ,
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  }
  ,
  {
    path: 'header',
    component: HeaderComponent
  },
 
  {
    path: "",
    component: Showbook1Component
  },
  
  {
    path: 'buyerland',
    component: BuyerlandComponent
  },
  {
    path: 'sellerland',
    component: SellerlandComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'payment',
    component: PaymentComponent
  }
  ,
  {
    path: 'home',
    component: AppComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
