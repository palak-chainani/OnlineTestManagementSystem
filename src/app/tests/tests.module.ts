import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ResultComponent } from './result/result.component';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';



@NgModule({
  declarations: [
    TeacherDashboardComponent,
    StudentDashboardComponent,
    CreateTestComponent,
    ResultComponent,
    ViewSubmissionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestsModule { }
