import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/Features/sweet-alert.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any[]=[];
  canEditEmployee: boolean = false;
  canDeleteEmployee: boolean = false;
  canAddEmployee: boolean = false;
  canReadEmployee: boolean = false;
  
 constructor(private empService:EmployeeService ,private sweetAlertService:SweetAlertService , private router:Router, private permissionService : PermissionService){
 }
 navigateToAddEmployee() {
  if (this.canAddEmployee) {
    this.router.navigate(['/addEmployee']);
  } else {
    
    this.sweetAlertService.showAlert("You don't have permission");
  }
}

navigateToEditEmployee(id:number) {
  if (this.canEditEmployee) {
    this.router.navigate(['/addEmployee',id]);
  } else {
    this.sweetAlertService.showAlert("You don't have permission");
  }
}

  ngOnInit(): void { 
  const userRole = localStorage.getItem('role');
if (userRole) {
  this.permissionService.getEmployeePermissions(userRole).subscribe(
    (permissions) => {

      this.canEditEmployee = permissions[0].canEdit;
      this.canDeleteEmployee = permissions[0].canDelete;
      this.canAddEmployee = permissions[0].canAdd;
      this.canReadEmployee = permissions[0].canRead;
       this.getAllEmployee();
    },
    (error: any) => {
      console.error('Failed to fetch permissions for Employees section:', error);
    }
  );
} else {
  console.error('User role not found in local storage');
}
  }
  getAllEmployee()
 {
  console.log(this.canReadEmployee);
  if(this.canReadEmployee){
    this.empService.getAllEmployee().subscribe((o)=>{this.employees=o})
  }
 }
 deleteEmp(id:number)
 {
  if (this.canDeleteEmployee) {
    this.empService.deleteEmployee(id).subscribe((o)=>{this.getAllEmployee()})
  } else {
    this.sweetAlertService.showAlert("You don't have permission");
  }

 }
 addSettings(id:number){
  this.router.navigate(['/settings', id]);
 }

}

