import { TestBed, inject } from '@angular/core/testing';

import { CurrencyServiceService } from './currency-service.service';

describe('CurrencyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyServiceService]
    });
  });

  it('should be created', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
