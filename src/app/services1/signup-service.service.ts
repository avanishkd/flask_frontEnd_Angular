import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  User_Name:String;
  Age:String;
  Email:String;
  Password:String;
  Confirm_Password:String;
  Mobile:String;
  Address:String;
  Role:String;
  Aadhar:String;
  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }
  readonly ROOT_URL=this.baseUrl+"/signup";
  body={
    "Username" : this.User_Name,
    "Age" : this.Age,
    "Email_Id" : this.Email,
    "Password" : this.Password,
    "Confirm_Password" : this.Confirm_Password,
    "Phone Number" : this.Mobile,
    "Address" : this.Address,
    "Role" : this.Role,
    "Aadhar":this.Aadhar
  };
  posts:any;
  getposts(User_Name,Age,Email,Password,Confirm_Password,Mobile,Address,Role,Aadhar){
    this.User_Name=User_Name;
    this.Age=Age;
    this.Email=Email;
    this.Password=Password;
    this.Confirm_Password=Confirm_Password;
    this.Mobile=Mobile;
    this.Address=Address;
    this.Role=Role;
    this.Aadhar=Aadhar;
    this. body={
      "Username" : this.User_Name,
      "Age" : this.Age,
      "Email_Id" : this.Email,
      "Password" : this.Password,
      "Confirm_Password" : this.Confirm_Password,
      "Phone Number" : this.Mobile,
      "Address" : this.Address,
      "Role" :this.Role,
      "Aadhar":this.Aadhar
    }
    return this.posts=this.http.post(this.ROOT_URL,this.body)
  }
}
