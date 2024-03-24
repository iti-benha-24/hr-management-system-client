import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-get-emp-by-id',
  templateUrl: './get-emp-by-id.component.html',
  styleUrls: ['./get-emp-by-id.component.css']
})
export class GetEmpByIdComponent {
  id:number=0;
  idDept:number=0;
  constructor(private empService:EmployeeService){
  }

  getEmpById(id:number)
  {
   this.empService.getEmployeeById(id).subscribe()
  }
   getEmpByDeptId(id:number)
   {
    this.empService.getEmployeeByDeptId(id).subscribe()}
  }


