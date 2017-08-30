import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsDemoComponent } from './chips-demo.component';

describe('ChipsDemoComponent', () => {
  let component: ChipsDemoComponent;
  let fixture: ComponentFixture<ChipsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
