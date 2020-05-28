import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTastingComponent } from './group-tasting.component';

describe('GroupTastingComponent', () => {
  let component: GroupTastingComponent;
  let fixture: ComponentFixture<GroupTastingComponent>;

  beforeEach(async(() => {
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
