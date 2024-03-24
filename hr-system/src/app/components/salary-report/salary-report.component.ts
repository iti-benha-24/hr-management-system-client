import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/services/attendance.service';

@Component({
  selector: 'app-salary-report',
  templateUrl: './salary-report.component.html',
  styleUrls: ['./salary-report.component.css']
})
export class SalaryReportComponent implements OnInit {
  employees:any;
  months:any;
  monthNumber:number=0;
  yearNumber:any;
  empName:any;
  constructor(private attendService: AttendanceService , private router:Router) {
    this.months = this.attendService.months;
  }
  ngOnInit(): void {
    this.attendService.getAllEmployeesSalaryReport().subscribe(data => {
      this.employees = data;
    })
  }

  getSalaryReportByDate(monthNumber:number,yearNumber:number){
    this.attendService.getAllEmployeesSalaryReportByDate(monthNumber,yearNumber).subscribe(data => {
      this.employees = data;
    })
  }

  getAttendancesByName(empName:string){
    this.attendService.getAllEmployeesSalaryReportByName(empName).subscribe(data => {
      this.employees = data;
    })
  }



}
