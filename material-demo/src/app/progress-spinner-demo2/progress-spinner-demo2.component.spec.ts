import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerDemo2Component } from './progress-spinner-demo2.component';

describe('ProgressSpinnerDemo2Component', () => {
  let component: ProgressSpinnerDemo2Component;
  let fixture: ComponentFixture<ProgressSpinnerDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
