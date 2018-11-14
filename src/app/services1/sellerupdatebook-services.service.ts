import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SellerupdatebookServicesService {
  email1:string;
  book:string;
  bookNumber:string;
  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }
  readonly ROOT_URL=this.baseUrl+"/seller_update_books";
  body={
    "Email_Id" : this.email1,
    "Name" : this.book,
    "BookNum": this.bookNumber
  };
  posts:any;
  updatebooks(eml,book,num){
    
     this.email1=eml;
     this.book=book;
     this.bookNumber=num;
     console.log("service"+this.body+this.email1+this.book+this.bookNumber);
 
     this.body={
       "Email_Id" : this.email1,
       "Name" : this.book,
       "BookNum": this.bookNumber
     }
     return this.posts=this.http.patch(this.ROOT_URL,this.body)
}
}
