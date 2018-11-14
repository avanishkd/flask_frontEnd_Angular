import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-buyerland',
  templateUrl: './buyerland.component.html',
  styleUrls: ['./buyerland.component.css']
})
export class BuyerlandComponent implements OnInit {

  constructor(private router: Router,
    private toastr:ToastrService) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigateByUrl("");
    this.toastr.success('Successfully Logged out');
    } 
}
