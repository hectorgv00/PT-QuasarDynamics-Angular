import { TestBed } from '@angular/core/testing';

import { NotokenGuard } from './notoken.guard';

describe('NotokenGuard', () => {
  let guard: NotokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
