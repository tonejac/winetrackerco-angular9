import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginChoiceComponent } from './login-choice.component';

describe('LoginChoiceComponent', () => {
  let component: LoginChoiceComponent;
  let fixture: ComponentFixture<LoginChoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
