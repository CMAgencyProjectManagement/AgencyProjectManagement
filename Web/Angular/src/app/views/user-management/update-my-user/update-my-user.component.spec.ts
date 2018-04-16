import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyUserComponent } from './update-my-user.component';

describe('UpdateMyUserComponent', () => {
  let component: UpdateMyUserComponent;
  let fixture: ComponentFixture<UpdateMyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
