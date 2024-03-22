import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAttendance } from 'src/app/models/iattendance';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
url: string="https://localhost:7057/api/Attendance/GetAll";
employeeAttend:any;
months:{id:number, name:string}[];
constructor(private http:HttpClient) {
  this.months=[
    {id:1, name:"January"},
    {id:2, name:"February"},
    {id:3, name:"March"},
    {id:4, name:"April"},
    {id:5, name:"May"},
    {id:6, name:"June"},
    {id:7, name:"July"},
    {id:8, name:"August"},
    {id:9, name:"September"},
    {id:10, name:"October"},
    {id:11, name:"November"},
    {id:12, name:"December"}
  ];
 }
getAllAttendance(){
  return this.http.get(this.url);
}

getAllEmployee(){
  return this.http.get("https://localhost:7057/api/Employees/GetEmployees")
}
getEmployeeAttendanceById(id:number){
  return this.http.get("https://localhost:7057/api/Attendance/getbyId/"+id);
}

addEmployeAttendance(employeeAttend:IAttendance):Observable<any>{
 return this.http.post<any>("https://localhost:7057/api/Attendance/AddEmployeeAttendance",employeeAttend);
}

deleteAttendance(id:number):Observable<any>
{
  return this.http.delete<any>("https://localhost:7057/api/Attendance/DeleteEmployeeAttendance/"+id);

}

editAttendance(id:number,attendance:any):Observable<any>{
  return this.http.put<any>("https://localhost:7057/api/Attendance/EditEmployeeAttendance/"+id,attendance);
}

filterAttendanceByDate(startDate:any, endDate:any)
{
  return this.http.get("https://localhost:7057/api/Attendance/GetEmployeeAttendanceByDate?startDate="+startDate+"&endDate="+endDate);
}

filterAttendanceByName(name:any)
{
  return this.http.get("https://localhost:7057/api/Attendance/getEmployeeByName?name="+name);
}
getAllEmployeesSalaryReport(){
  return this.http.get("https://localhost:7057/api/SalaryReport/GetSalaryReport");
}
getAllEmployeesSalaryReportByDate(month:number,year:number){
  return this.http.get("https://localhost:7057/api/SalaryReport/FilterSalaryReport?month="+month+"&year="+year);
}
getAllEmployeesSalaryReportByName(name:string){
  return this.http.get("https://localhost:7057/api/SalaryReport/FilterSalaryReportByName?name="+name);
}
}
