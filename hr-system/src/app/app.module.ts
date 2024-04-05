import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';
import { SalaryReportComponent } from './Components/salary-report/salary-report.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { AttendanceFormComponent } from './Components/attendance-form/attendance-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { GetEmpByIdComponent } from './Components/get-emp-by-id/get-emp-by-id.component';
import { HomeComponent } from './Components/home/home.component';
import { GeneralSettingComponent } from './Components/general-setting/general-setting.component';
import { PermissionsComponent } from './Components/permissions/permissions.component';
import { PermissionFormComponent } from './Components/permission-form/permission-form.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
