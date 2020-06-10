import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineScoresComponent } from './wine-scores.component';

describe('WineScoresComponent', () => {
  let component: WineScoresComponent;
  let fixture: ComponentFixture<WineScoresComponent>;

  beforeEach(async(() => {
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
