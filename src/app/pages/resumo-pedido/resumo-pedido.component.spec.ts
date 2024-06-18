import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPedidoComponent } from './resumo-pedido.component';

describe('ResumoPedidoComponent', () => {
  let component: ResumoPedidoComponent;
  let fixture: ComponentFixture<ResumoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
