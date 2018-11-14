import { TestBed, inject } from '@angular/core/testing';

import { SellerupdatebookServicesService } from './sellerupdatebook-services.service';

describe('SellerupdatebookServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerupdatebookServicesService]
    });
  });

  it('should be created', inject([SellerupdatebookServicesService], (service: SellerupdatebookServicesService) => {
    expect(service).toBeTruthy();
  }));
});
