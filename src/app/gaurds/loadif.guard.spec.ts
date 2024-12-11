import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loadifGuard } from './loadif.guard';

describe('loadifGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadifGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
