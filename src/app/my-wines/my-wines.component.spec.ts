import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWinesComponent } from './my-wines.component';

describe('MyWinesComponent', () => {
  let component: MyWinesComponent;
  let fixture: ComponentFixture<MyWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
