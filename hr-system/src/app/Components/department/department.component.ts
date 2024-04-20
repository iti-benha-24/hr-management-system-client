import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/Features/sweet-alert.service';
import { DepartmentService } from 'src/app/services/department.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
  departments:any[]=[];
 
  
 constructor(private deptService:DepartmentService ,private sweetAlertService:SweetAlertService , private router:Router){
 }

ngOnInit(): void { 
    this.getAllDepartment();  
  }
 getAllDepartment()
 {
  this.deptService.getAllDepartments().subscribe((o)=>{this.departments=o})
 }
 deleteEmp(id:number)
 {
  
    this.deptService.deleteDepartment(id).subscribe({
      next:()=>{
        this.getAllDepartment();
      },
      error:(error)=>{
        console.log(error);
      }
    })

 }
}
