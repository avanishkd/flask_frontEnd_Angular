import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ForgotpasswordServiceService } from "src/app/services/forgotpassword-service.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'my-app',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.css']
})
export class ApComponent {
  password1;
  password2;

  constructor(
    private forgotpasswordServiceService: ForgotpasswordServiceService,
    private toastr: ToastrService
  ) { }

  showSuccess() {

    this.toastr.success('Password changed!');

  }

  showFail() {
    this.toastr.error('Not Changed!');
  }

  showApiFail() {
    this.toastr.error('Back end not running!');
  }


  sendPass(email, phone, password1, password2) {

    this.forgotpasswordServiceService.getposts(email, phone, password1, password2).subscribe(res => {
      if (res == "Updated") {
        this.showSuccess();
      }
      else {
        this.toastr.error(res.toString());
      }
    },
      (err) => {

        this.showApiFail();
      })

  }

}
