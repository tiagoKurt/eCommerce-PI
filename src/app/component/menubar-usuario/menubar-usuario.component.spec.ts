import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarUsuarioComponent } from './menubar-usuario.component';

describe('MenubarUsuarioComponent', () => {
  let component: MenubarUsuarioComponent;
  let fixture: ComponentFixture<MenubarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
