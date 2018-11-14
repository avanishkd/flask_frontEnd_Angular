import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { LoginComponent } from "src/app/login/login.component";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  email1:string;
  password1:string;
  baseUrl=environment.baseUrl;
  constructor(private http: HttpClient) { }
  readonly ROOT_URL=this.baseUrl+"/login_emailid";
  body={
    "Email_Id" : this.email1,
    "Password" : this.password1
  };
  posts:any;
  getposts(eml,pass){
   
    this.email1=eml;
    this.password1=pass;
    console.log("service"+this.body+this.email1+this.password1);

    this.body={
      "Email_Id" : this.email1,
      "Password" : this.password1
    }
    return this.posts=this.http.post(this.ROOT_URL,this.body)
  }

}
