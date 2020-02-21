import { TestBed } from '@angular/core/testing';

import { Usuarios.Service.TsService } from './usuarios.service.ts.service';

describe('Usuarios.Service.TsService', () => {
  let service: Usuarios.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuarios.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
