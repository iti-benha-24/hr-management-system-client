// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// // import { AttendanceComponent } from './Components/attendance/attendance.component';
// import { AttendanceFormComponent } from './Components/attendance-form/attendance-form.component';
// import { SalaryReportComponent } from './Components/salary-report/salary-report.component';
// import { RegistrationComponent } from './Components/registration/registration.component';
// import { AuthGuardService } from 'src/services/auth-guard.service';
// import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
// import { LoginComponent } from './Components/login/login.component';
// import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';
// import { EmployeeComponent } from './Components/employee/employee.component';
// import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
// import { HomeComponent } from './Components/home/home.component';
// import { GeneralSettingComponent } from './Components/general-setting/general-setting.component';
// import { PermissionsComponent } from './Components/permissions/permissions.component';
// import { PermissionFormComponent } from './Components/permission-form/permission-form.component';
// import { PublicHolidayGetAllComponent } from './components/public-holiday-get-all/public-holiday-get-all.component';
// import { LoginComponent } from './components/login/login.component';
// import { PublicHolidayInsertComponent } from './components/public-holiday-insert/public-holiday-insert.component';
// import { EmployeeComponent } from './components/employee/employee.component';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { HomeComponent } from './components/home/home.component';
// import { GeneralSettingComponent } from './components/general-setting/general-setting.component';
// import { PermissionsComponent } from './components/permissions/permissions.component';
// import { PermissionFormComponent } from './components/permission-form/permission-form.component';
// import { DepartmentComponent } from './components/department/department.component';
// import { DepartmentFormComponent } from './components/department-form/department-form.component';
// import { UsersComponent } from './components/users/users.component';
// import { AttendanceComponent } from './Components/attendance/attendance.component';





// const routes: Routes = [
//   // Add routes here

  
//   { path: 'home', component:HomeComponent , canActivate: [AuthGuardService] },
//   { path: 'register', component: RegistrationComponent , canActivate: [AuthGuardService] },
//   { path: 'login', component: LoginComponent },
//   { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
//   { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuardService] },
//   { path: 'salaryReport', component: SalaryReportComponent, canActivate: [AuthGuardService] },
//   { path: 'add', component: AttendanceFormComponent, canActivate: [AuthGuardService] },
//   { path: 'edit/:id', component: AttendanceFormComponent, canActivate: [AuthGuardService] },
//   { path: "holidays", component: PublicHolidayGetAllComponent, canActivate: [AuthGuardService] },
//   { path: "insert", component: PublicHolidayInsertComponent, canActivate: [AuthGuardService] },
//   { path: 'editholiday/:id', component: PublicHolidayInsertComponent, canActivate: [AuthGuardService] },
 

//   {path:'department',component:DepartmentComponent, canActivate: [AuthGuardService] },
//   {path:'addDept',component:DepartmentFormComponent, canActivate: [AuthGuardService] },
//   {path:'editDept/:id',component:DepartmentFormComponent, canActivate: [AuthGuardService] },

//   {path:'employee',component:EmployeeComponent, canActivate: [AuthGuardService] },
//   { path:'addEmployee',component:AddEmployeeComponent, canActivate: [AuthGuardService] },
//   {path:'addEmployee/:id',component:AddEmployeeComponent, canActivate: [AuthGuardService] },
//   {path:'settings/:id',component:GeneralSettingComponent, canActivate: [AuthGuardService] },
//   {path:'permissions',component:PermissionsComponent, canActivate: [AuthGuardService] },
//   {path:'newrole',component:PermissionFormComponent, canActivate: [AuthGuardService] },
//   {path:'editrole/:id',component:PermissionFormComponent, canActivate: [AuthGuardService] },

//    { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


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
 import { DepartmentComponent } from './components/department/department.component';
 import { DepartmentFormComponent } from './components/department-form/department-form.component';
 import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  // Add routes here

  
  { path: 'home', component:HomeComponent , canActivate: [AuthGuardService] },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuardService] },
  { path: 'salaryReport', component: SalaryReportComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AttendanceFormComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: AttendanceFormComponent, canActivate: [AuthGuardService] },
  { path: "holidays", component: PublicHolidayGetAllComponent, canActivate: [AuthGuardService] },
  { path: "insert", component: PublicHolidayInsertComponent, canActivate: [AuthGuardService] },
  { path: 'editholiday/:id', component: PublicHolidayInsertComponent, canActivate: [AuthGuardService] },
  
  {path:'department',component:DepartmentComponent, canActivate: [AuthGuardService] },
  {path:'addDept',component:DepartmentFormComponent, canActivate: [AuthGuardService] },
  {path:'editDept/:id',component:DepartmentFormComponent, canActivate: [AuthGuardService] },

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
export class AppRoutingModule { }
