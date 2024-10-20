import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementInterfaceComponent } from './payement-interface.component';

describe('PayementInterfaceComponent', () => {
  let component: PayementInterfaceComponent;
  let fixture: ComponentFixture<PayementInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
