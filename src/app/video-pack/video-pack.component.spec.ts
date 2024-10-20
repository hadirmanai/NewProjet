import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPackComponent } from './video-pack.component';

describe('VideoPackComponent', () => {
  let component: VideoPackComponent;
  let fixture: ComponentFixture<VideoPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
