import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginsecurityGuard } from './loginsecurity.guard';

describe('loginsecurityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginsecurityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
