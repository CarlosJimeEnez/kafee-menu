import { TestBed } from '@angular/core/testing';

import { RustComunicationService } from './rust-comunication.service';

describe('RustComunicationService', () => {
  let service: RustComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RustComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
