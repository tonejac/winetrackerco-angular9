import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WineDetailsComponent } from './wine-details.component';

describe('WineDetailsComponent', () => {
  let component: WineDetailsComponent;
  let fixture: ComponentFixture<WineDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
