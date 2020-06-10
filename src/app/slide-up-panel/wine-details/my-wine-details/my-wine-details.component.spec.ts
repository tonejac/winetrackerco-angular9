import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWineDetailsComponent } from './my-wine-details.component';

describe('MyWineDetailsComponent', () => {
  let component: MyWineDetailsComponent;
  let fixture: ComponentFixture<MyWineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
