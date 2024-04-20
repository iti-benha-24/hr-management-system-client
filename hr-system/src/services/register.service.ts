import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'https://localhost:7057/api/Auth'
  constructor(private http: HttpClient) { }

  registerUser(user: Iuser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user)
  }

  getAllUsers(){
    return this.http.get(`https://localhost:7057/api/Users/GetAll`);
  }
  deleteUser(id:string){
    return this.http.delete(`https://localhost:7057/api/Users/Delete/`+id);
  }
}
