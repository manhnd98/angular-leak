import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLeakComponent } from './form-leak.component';

describe('FormLeakComponent', () => {
  let component: FormLeakComponent;
  let fixture: ComponentFixture<FormLeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
