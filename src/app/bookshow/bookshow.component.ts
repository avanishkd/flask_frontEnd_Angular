import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { WishlistServiceService } from "src/app/services1/wishlist-service.service";

import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { OrderServiceService } from "src/app/services1/order-service.service";
import { OrderConfirmComponent } from "src/app/order-confirm/order-confirm.component";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-bookshow',
  templateUrl: './bookshow.component.html',
  styleUrls: ['./bookshow.component.css']
})
export class BookshowComponent implements OnInit {

  
  private loadloggedin= false;
  
    constructor(
      private wishlistServiceService: WishlistServiceService,
      private OrderserviceService: OrderServiceService,
      private toastr: ToastrService,
      private router: Router,
      
    
    ) { }
  
    
    showSuccess() {
      this.toastr.success('To Wishlist', 'Added !');
      
      
    }
  
    showFail() {
      this.toastr.error('No Fun','Not Registered!');
    }
    
  
    ngOnInit() {
    }
    getposts(name,isbn) {
      this.loadloggedin = true;
      this.wishlistServiceService.getposts(name,isbn)
      .subscribe((res:any) => {
        console.log(res);

        if(res=="Added to wishlist successfully")
          {
            this.showSuccess();
            
          }
          else if(res=="Book Already Present")
            {
              this.toastr.error('Book Already Present');
            }
       
      })
    }


    getOrder(isbn) {
      console.log(isbn);
      this.loadloggedin = true;
      this.OrderserviceService.getOrder(isbn)
      .subscribe((res:any) => {
        console.log(res);

        if(res=="Order Placed")
          {
            this.toastr.success('Order success!');
            this.router.navigateByUrl('orderconf');
          }
          else if(res=="Book Already Present")
            {
              this.toastr.error('Book Already Present');
             
            }
       
      })
    }
}
