import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupTastingComponent } from './group-tasting.component';

describe('GroupTastingComponent', () => {
  let component: GroupTastingComponent;
  let fixture: ComponentFixture<GroupTastingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
