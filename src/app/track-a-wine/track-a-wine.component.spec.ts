import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrackAWineComponent } from './track-a-wine.component';

describe('TrackAWineComponent', () => {
  let component: TrackAWineComponent;
  let fixture: ComponentFixture<TrackAWineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackAWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
