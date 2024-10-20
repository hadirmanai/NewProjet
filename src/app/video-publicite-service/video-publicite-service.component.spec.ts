import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPubliciteServiceComponent } from './video-publicite-service.component';

describe('VideoPubliciteServiceComponent', () => {
  let component: VideoPubliciteServiceComponent;
  let fixture: ComponentFixture<VideoPubliciteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPubliciteServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPubliciteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
