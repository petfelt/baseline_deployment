import { TestBed, inject } from '@angular/core/testing';

import { BidThreeService } from './bid-three.service';

describe('BidThreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidThreeService]
    });
  });

  it('should ...', inject([BidThreeService], (service: BidThreeService) => {
    expect(service).toBeTruthy();
  }));
});
