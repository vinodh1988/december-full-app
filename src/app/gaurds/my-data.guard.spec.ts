import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myDataGuard } from './my-data.guard';

describe('myDataGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myDataGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
