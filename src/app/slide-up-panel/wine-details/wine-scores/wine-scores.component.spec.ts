import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WineScoresComponent } from './wine-scores.component';

describe('WineScoresComponent', () => {
  let component: WineScoresComponent;
  let fixture: ComponentFixture<WineScoresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WineScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
