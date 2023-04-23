import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputWineComponent } from './input-wine.component';

describe('InputWineComponent', () => {
  let component: InputWineComponent;
  let fixture: ComponentFixture<InputWineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
