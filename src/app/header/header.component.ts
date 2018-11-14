import { SignupComponent } from './../signup/signup.component';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShowLogoutService } from "src/app/services1/show-logout.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private loadLogin = false;
  private loadSignup = false;
  private loadWishlist = false;

  constructor(
    public dialog: MatDialog,
    private wish: ShowLogoutService,
    private router: Router,
    private toastr: ToastrService
  ) { } // changed

  ngOnInit() {
  }

  openSignup(): void {
    this.loadSignup = true;
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '700px',
    });
  }

  openLogin(): void {
    this.loadWishlist = this.wish.loadMywishlist();
    this.loadLogin = true;
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '700px',
    });
  }
  logout() {
    this.router.navigateByUrl("");
    this.toastr.success('Successfully Logged out');
    this.loadWishlist = false;
  }
  loadMyLogin() {
    this.loadLogin = true;

  }
  loadMySignup() {
    this.loadSignup = true;

  }


}
