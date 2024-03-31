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
    const listItems = document.querySelectorAll(".navigation li");
    this.role=this.loginService.getUserRole();
    console.log(this.loginService.getUserRole());
    console.log(this.role);
    console.log("hellllo");
    listItems.forEach(item => {
      const li = item as HTMLElement;
      li.addEventListener("mouseover", () => {
        this.activeLink(li);
      });
    });
    const toggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");

    if(toggle && navigation && main){
      toggle.addEventListener("click", () => {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
      });
    }
  }


  logout(){
    this.loginService.logout();
  }

  isLoggedIn():boolean{
    return this.loginService.isLoggedIn();
  }
  activeLink(item: HTMLElement) {
    const listItems = document.querySelectorAll(".navigation li");
    listItems.forEach((li: any) => {
      li.classList.remove("hovered");
    });
    item.classList.add("hovered");
  }
  


}
