import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  role:string='';
  constructor(private loginService:LoginService){
    
  }
  ngOnInit(): void {
    this.role=this.loginService.getUserRole();
    console.log(this.loginService.getUserRole());
    console.log(this.role);
    console.log("hellllo");

  }


  logout(){
    this.loginService.logout();
  }

  isLoggedIn():boolean{
    return this.loginService.isLoggedIn();
  }


}
