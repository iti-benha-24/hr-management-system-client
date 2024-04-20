import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor( private http:HttpClient) { }
  getAllDepartments():Observable<any>
  {
   return this.http.get('https://localhost:7057/api/Department/getAll');
  }
  getDepartmentById( id:number):Observable<any>
  {
    return this.http.get(`https://localhost:7057/api/Department/getById/${id}`);
  }
 
  deleteDepartment(id:number):Observable<any>
  {
    return this.http.delete(`https://localhost:7057/api/Department/delete/${id}`);
  }
  updateDepartment(id:number,department:any ):Observable<any>
  {
    return this.http.put(`https://localhost:7057/api/Department/edit/${id}` ,department);
  }
  addDepartment(department:any):Observable<any>
  {
    return this.http.post<any>(`https://localhost:7057/api/Department/Add`,department);
  }
}
