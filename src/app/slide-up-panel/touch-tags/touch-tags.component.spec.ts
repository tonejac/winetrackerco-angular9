import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchTagsComponent } from './touch-tags.component';

describe('TouchTagsComponent', () => {
  let component: TouchTagsComponent;
  let fixture: ComponentFixture<TouchTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
