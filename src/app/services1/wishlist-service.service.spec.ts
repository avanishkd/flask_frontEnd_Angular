import { TestBed, inject } from '@angular/core/testing';

import { WishlistServiceService } from './wishlist-service.service';

describe('WishlistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistServiceService]
    });
  });

  it('should be created', inject([WishlistServiceService], (service: WishlistServiceService) => {
    expect(service).toBeTruthy();
  }));
});
