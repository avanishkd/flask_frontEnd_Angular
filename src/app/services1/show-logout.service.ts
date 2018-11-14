import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowLogoutService {

  constructor() { }
  private loadWishlist=false;
  loadMywishlist(){
    this.loadWishlist=true;
    return this.loadWishlist;
  }
}
