import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http:HttpClient) { 

  }
  getAllRoles(){
    return this.http.get('https://localhost:7057/api/Roles/GetAllRoles');
  }

  getRoleById(id:string){
    return this.http.get('https://localhost:7057/api/Roles/getById/'+id);
  }
  AddRoleAndPermissions(rolePer:any){
    return this.http.post('https://localhost:7057/api/Roles/CreateRole',rolePer);
  }

  EditRoleAndPermissions(id:string, roleper:any){
    return this.http.put('https://localhost:7057/api/Roles/EditRole/'+id,roleper);

  }

  DeleteRoleAndPermissions(id:string){
    return this.http.delete('https://localhost:7057/api/Roles/DeleteRole/'+id);
  }



  getPermissionsForSection(section: string, role: string): Observable<any> {
    return this.http.get<any>(`https://localhost:7057/api/Roles/getPermissionsForSection/${section}?role=${role}`);
  }

  getEmployeePermissions(role: string): Observable<any> {
    return this.getPermissionsForSection('Employees', role);
  }
  
  getSalaryPermissions(role: string): Observable<any> {
    return this.getPermissionsForSection('Salaries', role);
  }
  getAttendancePermissions(role: string): Observable<any> {
    return this.getPermissionsForSection('Attendances', role);
  }
  getHolidayPermissions(role: string): Observable<any> {
    return this.getPermissionsForSection('Holidays', role);
  }
  getPermissionsForPermissions(role: string): Observable<any> {
    return this.getPermissionsForSection('Permissions', role);
  }








}
