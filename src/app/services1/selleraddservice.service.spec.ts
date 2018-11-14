import { TestBed, inject } from '@angular/core/testing';

import { SelleraddserviceService } from './selleraddservice.service';

describe('SelleraddserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelleraddserviceService]
    });
  });

  it('should be created', inject([SelleraddserviceService], (service: SelleraddserviceService) => {
    expect(service).toBeTruthy();
  }));
});
