import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptoGastoComponent } from './concepto-gasto.component';

describe('ConceptoGastoComponent', () => {
  let component: ConceptoGastoComponent;
  let fixture: ComponentFixture<ConceptoGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptoGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
