import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaDemoComponent } from './textarea-demo.component';

describe('TextareaDemoComponent', () => {
  let component: TextareaDemoComponent;
  let fixture: ComponentFixture<TextareaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
