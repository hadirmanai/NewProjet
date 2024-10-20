import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPackComponent } from './details-pack.component';

describe('DetailsPackComponent', () => {
  let component: DetailsPackComponent;
  let fixture: ComponentFixture<DetailsPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
