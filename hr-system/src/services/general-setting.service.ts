import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralSetting } from 'src/app/models/igeneral-setting';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingService {
  private baseUrl = 'https://localhost:7057/api/Settings'
  
 
  constructor(private http:HttpClient) { }
  
  addSetting(id:number ,setting: IGeneralSetting): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/CreateSettings/${id}`,setting);
   }

   editSetting(id:number ,setting: IGeneralSetting): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/EditSetting/${id}`,setting);
   }
   getSetting(id:number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/GetSettingByEmpId/${id}`);
   }
}
