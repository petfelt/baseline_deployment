import { TestBed, inject } from '@angular/core/testing';

import { BidTwoService } from './bid-two.service';

describe('BidTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidTwoService]
    });
  });

  it('should ...', inject([BidTwoService], (service: BidTwoService) => {
    expect(service).toBeTruthy();
  }));
});
