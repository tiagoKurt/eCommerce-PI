import { TestBed } from '@angular/core/testing';

import { ListaCardsProdutosService } from './lista-cards-produtos.service';

describe('ListaCardsProdutosService', () => {
  let service: ListaCardsProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCardsProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
