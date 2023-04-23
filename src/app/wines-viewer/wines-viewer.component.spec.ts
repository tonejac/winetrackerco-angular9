import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WinesViewerComponent } from './wines-viewer.component';

describe('WinesViewerComponent', () => {
  let component: WinesViewerComponent;
  let fixture: ComponentFixture<WinesViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WinesViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
