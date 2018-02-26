import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSchedulingComponent } from './project-scheduling.component';

describe('ProjectSchedulingComponent', () => {
  let component: ProjectSchedulingComponent;
  let fixture: ComponentFixture<ProjectSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
