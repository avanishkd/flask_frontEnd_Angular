import { TestBed, inject } from '@angular/core/testing';

import { ShowLogoutService } from './show-logout.service';

describe('ShowLogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowLogoutService]
    });
  });

  it('should be created', inject([ShowLogoutService], (service: ShowLogoutService) => {
    expect(service).toBeTruthy();
  }));
});
