import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularButtonComponent } from './regular-button.component';

describe('RegularButtonComponent', () => {
  let component: RegularButtonComponent;
  let fixture: ComponentFixture<RegularButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
