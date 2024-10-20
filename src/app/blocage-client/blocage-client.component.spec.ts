import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocageClientComponent } from './blocage-client.component';

describe('BlocageClientComponent', () => {
  let component: BlocageClientComponent;
  let fixture: ComponentFixture<BlocageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocageClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
