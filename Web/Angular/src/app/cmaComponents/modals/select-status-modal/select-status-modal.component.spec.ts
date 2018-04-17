import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStatusModalComponent } from './select-status-modal.component';

describe('SelectStatusModalComponent', () => {
  let component: SelectStatusModalComponent;
  let fixture: ComponentFixture<SelectStatusModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStatusModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
