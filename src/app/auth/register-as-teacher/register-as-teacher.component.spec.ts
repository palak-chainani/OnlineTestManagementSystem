import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsTeacherComponent } from './register-as-teacher.component';

describe('RegisterAsTeacherComponent', () => {
  let component: RegisterAsTeacherComponent;
  let fixture: ComponentFixture<RegisterAsTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAsTeacherComponent]
    });
    fixture = TestBed.createComponent(RegisterAsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
