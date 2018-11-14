import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { OrderServiceService } from "src/app/services1/order-service.service";
import { BookshowComponent } from "src/app/bookshow/bookshow.component";


@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  setup: string;

  ngOnInit() {
  }

  constructor(
    private orderServiceService: OrderServiceService,
    private toastr: ToastrService,
    private router: Router,
  
) { }

  Order(isbn) {
   

    this.orderServiceService.getOrder(isbn)
      .subscribe((res: any) => {
        console.log(res);
           
      })
  }

}
