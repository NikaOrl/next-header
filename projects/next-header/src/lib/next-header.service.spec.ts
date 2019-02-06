import { TestBed } from '@angular/core/testing';

import { NextHeaderService } from './next-header.service';

describe('NextHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextHeaderService = TestBed.get(NextHeaderService);
    expect(service).toBeTruthy();
  });
});
