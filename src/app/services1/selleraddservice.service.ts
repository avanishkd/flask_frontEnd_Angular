import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SelleraddserviceService {
  email1:string;
  book:string;
  price:string;
  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }
  readonly ROOT_URL=this.baseUrl+"/seller_add_books";
  body={
    "Email_Id" : this.email1,
    "Name" : this.book,
    "Price": this.price
  };
  posts:any;
  getbooks(eml,book,prc){
    
     this.email1=eml;
     this.book=book;
     this.price=prc;
     console.log("service"+this.body+this.email1+this.book+this.price);
 
     this.body={
       "Email_Id" : this.email1,
       "Name" : this.book,
       "Price": this.price
     }
     return this.posts=this.http.patch(this.ROOT_URL,this.body)
}
}
