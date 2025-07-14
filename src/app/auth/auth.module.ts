import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterAsTeacherComponent } from './register-as-teacher/register-as-teacher.component';
import { RegisterAsStudentComponent } from './register-as-student/register-as-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterAsTeacherComponent,
    RegisterAsStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
