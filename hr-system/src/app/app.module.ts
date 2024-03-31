import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHolidayGetAllComponent } from './components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayInsertComponent } from './components/public-holiday-insert/public-holiday-insert.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GetEmpByIdComponent } from './components/get-emp-by-id/get-emp-by-id.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralSettingComponent } from './components/general-setting/general-setting.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { PermissionFormComponent } from './components/permission-form/permission-form.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    SalaryReportComponent,
    AttendanceFormComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    PublicHolidayGetAllComponent,
    PublicHolidayInsertComponent,
    EmployeeComponent,
    GetEmpByIdComponent,
    AddEmployeeComponent,
    HomeComponent,
    GeneralSettingComponent,
    PermissionsComponent,
    PermissionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule ,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
