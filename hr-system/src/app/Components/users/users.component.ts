import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;
  constructor(private registerService:RegisterService,private router:Router) {
   
  }
  ngOnInit(): void {
    this.registerService.getAllUsers().subscribe({
      next:(response)=>{
        this.users=response;
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }

  deleteUser(id:string){
    this.registerService.deleteUser(id).subscribe({
      next:(response)=>{
        this.ngOnInit();
      
      },
      error:(error)=>{
        
        console.log(error);
      }
    });
  }

  

  

}
