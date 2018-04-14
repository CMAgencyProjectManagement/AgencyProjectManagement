import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUsersModalComponent } from './select-users-modal.component';

describe('SelectUsersModalComponent', () => {
  let component: SelectUsersModalComponent;
  let fixture: ComponentFixture<SelectUsersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUsersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
