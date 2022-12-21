import { TestBed } from '@angular/core/testing';

import { OnTokenService } from './on-token.service';

describe('OnTokenService', () => {
  let service: OnTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
