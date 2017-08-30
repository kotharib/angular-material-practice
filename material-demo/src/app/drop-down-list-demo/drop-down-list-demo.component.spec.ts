import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListDemoComponent } from './drop-down-list-demo.component';

describe('DropDownListDemoComponent', () => {
  let component: DropDownListDemoComponent;
  let fixture: ComponentFixture<DropDownListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
