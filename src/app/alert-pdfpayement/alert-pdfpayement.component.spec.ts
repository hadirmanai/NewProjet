import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPDFPayementComponent } from './alert-pdfpayement.component';

describe('AlertPDFPayementComponent', () => {
  let component: AlertPDFPayementComponent;
  let fixture: ComponentFixture<AlertPDFPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertPDFPayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPDFPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
