import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideUpContentComponent } from './slide-up-content.component';

describe('SlideUpContentComponent', () => {
  let component: SlideUpContentComponent;
  let fixture: ComponentFixture<SlideUpContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideUpContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideUpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
