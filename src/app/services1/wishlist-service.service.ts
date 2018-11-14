import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { WishlistComponent } from "src/app/wishlist/wishlist.component";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  nname: string;
  isbn: string;
  baseUrl=environment.baseUrl;
  constructor(private http: HttpClient) { }
  readonly ROOT_URL = this.baseUrl+"/add_to_wishlist";
  body = {
    "ISBN": this.isbn
  };
  posts: any;


  getposts(n, i) {

    this.nname = n;
    this.isbn = i;

    this.body = {
      "ISBN": this.isbn
    };

    return this.posts = this.http.post(this.ROOT_URL, this.body).pipe(
      res => res
    )
  }


}
