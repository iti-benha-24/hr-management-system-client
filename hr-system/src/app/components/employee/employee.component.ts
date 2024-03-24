import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any[]=[];
 constructor(private empService:EmployeeService){
 }
  ngOnInit(): void {
    this.getAllEmployee();
    console.log(this.employees)
  }
 getAllEmployee()
 {
  this.empService.getAllEmployee().subscribe((o)=>{this.employees=o})
 }
 deleteEmp(id:number)
 {
  this.empService.deleteEmployee(id).subscribe((o)=>{this.getAllEmployee()})

 }

}

