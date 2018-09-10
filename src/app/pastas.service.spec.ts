import { TestBed, inject } from '@angular/core/testing';

import { PastasService } from './pastas.service';

describe('PastasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastasService]
    });
  });

  it('should be created', inject([PastasService], (service: PastasService) => {
    expect(service).toBeTruthy();
  }));
});
