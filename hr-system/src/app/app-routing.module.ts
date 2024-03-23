import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { PublicHolidayGetAllComponent } from './components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayUpdateComponent } from './components/public-holiday-update/public-holiday-update.component';
import { LoginComponent } from './components/login/login.component';
import { PublicHolidayInsertComponent } from './components/public-holiday-insert/public-holiday-insert.component';
const routes: Routes = [
  // Add routes here
  {path: 'home', component: AttendanceComponent , canActivate:[AuthGuardService]},
  {path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent},
  {path: 'attendance',component: AttendanceComponent , canActivate:[AuthGuardService]},
  {path:'salaryReport',component:SalaryReportComponent , canActivate:[AuthGuardService] },
  {path:'add',component:AttendanceFormComponent , canActivate:[AuthGuardService] },
  {path:'edit/:id',component:AttendanceFormComponent , canActivate:[AuthGuardService]},
  { path : "holidays", component : PublicHolidayGetAllComponent , canActivate:[AuthGuardService] },
  { path : "insert" , component : PublicHolidayInsertComponent  , canActivate:[AuthGuardService] },
  { path : 'update' , component : PublicHolidayUpdateComponent , canActivate:[AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
