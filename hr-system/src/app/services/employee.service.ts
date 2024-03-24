import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }
  getAllEmployee():Observable<any>
  {
   return this.http.get('https://localhost:7057/api/Employees/GetEmployees');
  }
  getAllDepartment():Observable<any>
  {
    return this.http.get( 'https://localhost:7057/api/Employees/GetAllDepartments');
  }
  getEmployeeById( id:number):Observable<any>
  {
    return this.http.get(`https://localhost:7057/api/Employees/GetEmployee/${id}`);
  }
  getEmployeeByDeptId(deptId:number):Observable<any>
  {
    return this.http.get(`https://localhost:7057/api/Employees/ByDept/${deptId}`);
  }
  deleteEmployee(id:number):Observable<any>
  {
    return this.http.delete(`https://localhost:7057/api/Employees/DeleteEmployee/${id}`);
  }
  updateEmployee(id:number,employee:any ):Observable<any>
  {
    return this.http.put(`https://localhost:7057/api/Employees/PutEmployee/${id}` ,employee);
  }
  addEmployee(employee:any):Observable<any>
  {
    return this.http.post<any>(`https://localhost:7057/api/Employees/PostEmployee`,employee);
  }
}
