import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    SalaryReportComponent,
    AttendanceFormComponent
    
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
