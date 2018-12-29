import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjuntarPdfComponent } from './adjuntar-pdf.component';

describe('AdjuntarPdfComponent', () => {
  let component: AdjuntarPdfComponent;
  let fixture: ComponentFixture<AdjuntarPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjuntarPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjuntarPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
