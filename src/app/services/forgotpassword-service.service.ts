import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordServiceService {

  email:string;
  phone:string;
  pass1:string;
  pass2:string;
  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }
  readonly ROOT_URL=this.baseUrl+"/change_password";
  body={
   "Email_Id":this.email,
   "Phone Number": this.phone,
   "Password":this.pass1,
  };
  posts:any;
  getposts(email,phone,password1,password2){

    this.email=email;
    this.phone=phone;
    this.pass1=password1;
    this.pass2=password2;
    this.body={
      "Email_Id":this.email,
      "Phone Number": this.phone,
      "Password":this.pass1,
     };
    return this.posts=this.http.post(this.ROOT_URL,this.body)
  }

}
