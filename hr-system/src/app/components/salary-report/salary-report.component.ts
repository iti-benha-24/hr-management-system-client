import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
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
  canEditEmployee: boolean = false;
  canDeleteEmployee: boolean = false;
  canAddEmployee: boolean = false;
  canReadEmployee: boolean = false;
  constructor(private attendService: AttendanceService ,private permissionService:PermissionService, private router:Router) {
    this.months = this.attendService.months;
  }
  ngOnInit(): void {
    this.attendService.getAllEmployeesSalaryReport().subscribe(data => {
      this.employees = data;
    });
    const userRole = localStorage.getItem('role');
    if (userRole) {
      this.permissionService.getSalaryPermissions(userRole).subscribe(
        (permissions) => {
          this.canEditEmployee = permissions[0].canEdit;
          this.canDeleteEmployee = permissions[0].canDelete;
          this.canAddEmployee = permissions[0].canAdd;
          this.canReadEmployee = permissions[0].canRead;
        },
        (error: any) => {
          console.error('Failed to fetch permissions for Employees section:', error);
        }
      );
    } else {
      // Handle case where userRole is null or undefined
      console.error('User role not found in local storage');
      // Handle error or set default permissions
    }
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
