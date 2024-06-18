import { TestBed } from '@angular/core/testing';

import { CadastrarUsuarioService } from './pedido.service';

describe('CadastrarUsuarioService', () => {
  let service: CadastrarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
