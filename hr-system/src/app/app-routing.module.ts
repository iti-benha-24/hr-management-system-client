import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';


const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{path:'',component:EmployeeComponent},
{ path:'addEmployee',component:AddEmployeeComponent},
{path:'addEmployee/:id',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
