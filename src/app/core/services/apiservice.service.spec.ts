import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './apiservice.service';

describe('ApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });
});