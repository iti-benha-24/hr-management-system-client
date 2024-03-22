import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';

const routes: Routes = [
  // Add routes here
  {
    path: '',
    component: AttendanceComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  
  {path:'salaryReport',component:SalaryReportComponent},
  {path:'add',component:AttendanceFormComponent},
  {path:'edit/:id',component:AttendanceFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
