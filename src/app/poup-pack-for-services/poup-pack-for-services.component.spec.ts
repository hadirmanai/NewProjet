import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupPackForServicesComponent } from './poup-pack-for-services.component';

describe('PoupPackForServicesComponent', () => {
  let component: PoupPackForServicesComponent;
  let fixture: ComponentFixture<PoupPackForServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupPackForServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupPackForServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
