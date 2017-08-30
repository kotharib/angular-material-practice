import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxDemoComponent } from './check-box-demo.component';

describe('CheckBoxDemoComponent', () => {
  let component: CheckBoxDemoComponent;
  let fixture: ComponentFixture<CheckBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
