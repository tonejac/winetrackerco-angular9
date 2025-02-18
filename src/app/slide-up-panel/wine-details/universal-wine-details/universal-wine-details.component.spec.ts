import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UniversalWineDetailsComponent } from './universal-wine-details.component';

describe('UniversalWineDetailsComponent', () => {
  let component: UniversalWineDetailsComponent;
  let fixture: ComponentFixture<UniversalWineDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalWineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalWineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
