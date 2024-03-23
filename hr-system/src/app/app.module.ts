import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    
  ],
  imports: [
    BrowserModule,
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
