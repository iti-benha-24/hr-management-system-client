import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  // Add routes here
  {path: 'home', component: AttendanceComponent , canActivate:[AuthGuardService]},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'attendance',component: AttendanceComponent},
  {path:'salaryReport',component:SalaryReportComponent},
  {path:'add',component:AttendanceFormComponent},
  {path:'edit/:id',component:AttendanceFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
