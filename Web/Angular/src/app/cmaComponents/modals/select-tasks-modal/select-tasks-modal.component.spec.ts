import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTasksModalComponent } from './select-tasks-modal.component';

describe('SelectTasksModalComponent', () => {
  let component: SelectTasksModalComponent;
  let fixture: ComponentFixture<SelectTasksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTasksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTasksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
