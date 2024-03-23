import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayUpdateComponent } from './Components/public-holiday-update/public-holiday-update.component';
import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    SalaryReportComponent,
    AttendanceFormComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent
    
    AppComponent,
    PublicHolidayGetAllComponent,
    PublicHolidayUpdateComponent,
    PublicHolidayInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule ,
 
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
