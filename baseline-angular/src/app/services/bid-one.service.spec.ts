import { TestBed, inject } from '@angular/core/testing';

import { BidOneService } from './bid-one.service';

describe('BidOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidOneService]
    });
  });

  it('should ...', inject([BidOneService], (service: BidOneService) => {
    expect(service).toBeTruthy();
  }));
});
