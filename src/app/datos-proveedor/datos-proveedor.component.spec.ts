import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosProveedorComponent } from './datos-proveedor.component';

describe('DatosProveedorComponent', () => {
  let component: DatosProveedorComponent;
  let fixture: ComponentFixture<DatosProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
