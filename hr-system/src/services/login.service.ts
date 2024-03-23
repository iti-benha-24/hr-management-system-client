import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from  '@auth0/angular-jwt' ;
import { Observable, tap } from 'rxjs';
import { IUserCredentials } from 'src/app/models/iuserCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://localhost:7057/api/Auth'
   private jwtHelper = new JwtHelperService();
  constructor(private http:HttpClient , private router:Router) { }

  // loginUser(user:IUserCredentials) : Observable<any>{
  //   return this.http.post<any>(`${this.baseUrl}/login`,user)
  // }

  loginUser(user:IUserCredentials) {
    return this.http.post<any>(`${this.baseUrl}/login`,user)
    .pipe(
      tap(response =>{
        if(response && response.token){
          localStorage.setItem('token',response.token)
        }
      })
      
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn():boolean{
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token)
  }

}
