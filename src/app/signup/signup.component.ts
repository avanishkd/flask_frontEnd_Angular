import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SignupServiceService } from '../services1/signup-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginServiceService } from "src/app/services1/login-service.service";

import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private formBuilder: FormBuilder,
    private signupServiceService: SignupServiceService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  showSuccess() {
    this.dialogRef.close();
    this.toastr.success('Have fun', 'Registered!');
    this.router.navigateByUrl('');
  }

  showFail() {
    this.toastr.error('No Fun', 'Registeration failed!');
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      role: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  getposts(User_Name, Age, Email, Password, Confirm_Password, Mobile, Address, Role, Aadhar) {

    this.signupServiceService.getposts(User_Name, Age, Email, Password, Confirm_Password, Mobile, Address, Role, Aadhar)
      .subscribe(res => {
        console.log(res);

        if (res == "Successfully added") {
          this.showSuccess();
        }
        else {
          this.toastr.error(res.toString());

        }
      })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }


}


