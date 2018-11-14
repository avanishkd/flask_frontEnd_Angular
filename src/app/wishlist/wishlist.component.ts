import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { WishlistServiceService } from "src/app/services1/wishlist-service.service";

import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  private loadloggedin= false;

  constructor(
    private wishlistServiceService: WishlistServiceService,
    private toastr: ToastrService,
    private router: Router
  
  ) { }

  showSuccess() {
    this.toastr.success('Have fun', 'Logged In!');
    this.router.navigateByUrl('buyerland');
    
  }

  showFail() {
    this.toastr.error('No Fun','Not Registered!');
  }
  

  ngOnInit() {
  }
  getposts(name,isbn) {
    this.loadloggedin = true;
    this.wishlistServiceService.getposts(name,isbn)
    .subscribe(res => {
      console.log(res);
     
    })
  }

}
