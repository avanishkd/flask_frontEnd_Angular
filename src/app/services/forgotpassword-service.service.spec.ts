import { TestBed, inject } from '@angular/core/testing';

import { ForgotpasswordServiceService } from './forgotpassword-service.service';

describe('ForgotpasswordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotpasswordServiceService]
    });
  });

  it('should be created', inject([ForgotpasswordServiceService], (service: ForgotpasswordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
