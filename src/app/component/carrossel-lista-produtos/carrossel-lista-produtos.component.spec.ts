import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselListaProdutosComponent } from './carrossel-lista-produtos.component';

describe('CarrosselListaProdutosComponent', () => {
  let component: CarrosselListaProdutosComponent;
  let fixture: ComponentFixture<CarrosselListaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselListaProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselListaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
