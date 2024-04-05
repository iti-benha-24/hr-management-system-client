import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AttendanceComponent } from './Components/attendance/attendance.component';
import { AttendanceFormComponent } from './Components/attendance-form/attendance-form.component';
import { SalaryReportComponent } from './Components/salary-report/salary-report.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
import { LoginComponent } from './Components/login/login.component';
import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { HomeComponent } from './Components/home/home.component';
import { GeneralSettingComponent } from './Components/general-setting/general-setting.component';
import { PermissionsComponent } from './Components/permissions/permissions.component';
import { PermissionFormComponent } from './Components/permission-form/permission-form.component';
const routes: Routes = [
  // Add routes here

  
  { path: 'home', component:HomeComponent , canActivate: [AuthGuardService] },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuardService] },
  { path: 'salaryReport', component: SalaryReportComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AttendanceFormComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: AttendanceFormComponent, canActivate: [AuthGuardService] },
  { path: "holidays", component: PublicHolidayGetAllComponent, canActivate: [AuthGuardService] },
  { path: "insert", component: PublicHolidayInsertComponent, canActivate: [AuthGuardService] },
  { path: 'editholiday/:id', component: PublicHolidayInsertComponent, canActivate: [AuthGuardService] },
  {path:'employee',component:EmployeeComponent, canActivate: [AuthGuardService] },
  { path:'addEmployee',component:AddEmployeeComponent, canActivate: [AuthGuardService] },
  {path:'addEmployee/:id',component:AddEmployeeComponent, canActivate: [AuthGuardService] },
  {path:'settings/:id',component:GeneralSettingComponent, canActivate: [AuthGuardService] },
  {path:'permissions',component:PermissionsComponent, canActivate: [AuthGuardService] },
  {path:'newrole',component:PermissionFormComponent, canActivate: [AuthGuardService] },
  {path:'editrole/:id',component:PermissionFormComponent, canActivate: [AuthGuardService] },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
