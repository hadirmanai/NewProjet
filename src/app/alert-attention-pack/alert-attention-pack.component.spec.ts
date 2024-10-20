import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAttentionPackComponent } from './alert-attention-pack.component';

describe('AlertAttentionPackComponent', () => {
  let component: AlertAttentionPackComponent;
  let fixture: ComponentFixture<AlertAttentionPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAttentionPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAttentionPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
