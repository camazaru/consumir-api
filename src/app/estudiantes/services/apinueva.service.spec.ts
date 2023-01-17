import { TestBed } from '@angular/core/testing';

import { ApinuevaService } from './apinueva.service';

describe('ApinuevaService', () => {
  let service: ApinuevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinuevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
