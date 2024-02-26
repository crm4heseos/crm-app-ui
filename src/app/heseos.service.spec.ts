import { TestBed } from '@angular/core/testing';

import { HeseosService } from './heseos.service';

describe('HeseosService', () => {
  let service: HeseosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeseosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
