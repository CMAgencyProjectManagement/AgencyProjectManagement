import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSectionComponent } from './manager-section.component';

describe('ManagerSectionComponent', () => {
  let component: ManagerSectionComponent;
  let fixture: ComponentFixture<ManagerSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
