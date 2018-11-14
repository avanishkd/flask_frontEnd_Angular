import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { WishlistComponent } from "src/app/wishlist/wishlist.component";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  isbn: string;
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  readonly ROOT_URL = this.baseUrl + "/order_books";
  readonly ROOT_URL1 = this.baseUrl + "/display_books";

  body = {
    "ISBN": this.isbn
  };

  body1 = {
    "book_id": this.isbn
  };
  posts: any;
  posts1:any;


  getOrder(i) {
    this.isbn=i;
    

    console.log(this.isbn);
    this.body = {
      "ISBN": this.isbn
    };

    return this.posts = this.http.post(this.ROOT_URL, this.body).pipe(
      res => res
    )
  }


  getDetails(i) {
    this.isbn=i;
    

    console.log(this.isbn);
    this.body1 = {
      "book_id": this.isbn
    };

    return this.posts = this.http.post(this.ROOT_URL1, this.body).pipe(
      res => res
    )
  }
}
