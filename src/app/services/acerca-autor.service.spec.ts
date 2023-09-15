import { TestBed } from '@angular/core/testing';

import { AcercaAutorService } from './acerca-autor.service';

describe('AcercaAutorService', () => {
  let service: AcercaAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercaAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
