import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sellerland',
  templateUrl: './sellerland.component.html',
  styleUrls: ['./sellerland.component.css']
})
export class SellerlandComponent implements OnInit {


  constructor(private router:Router) {
    
   }

  ngOnInit() {
  }
  buybooks(){
    this.router.navigateByUrl('buyerland');

  }
  feedback(){
    this.router.navigateByUrl('feedback');
  }
  addbook(){
    this.router.navigateByUrl('selleradd')
  }
  updatebook(){
    this.router.navigateByUrl('sellerupdate')
  }

}
