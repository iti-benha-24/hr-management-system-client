import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserCredentials } from 'src/app/models/iuserCredentials';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  responseMsg:any
  constructor(private fb:FormBuilder , private loginService:LoginService , private router:Router ){
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.loginForm.valid){
      let user = <IUserCredentials> this.loginForm.value as IUserCredentials
      this.loginService.loginUser(user).subscribe( {
        next:(response)=>{
          this.router.navigateByUrl('/home')
        },
        error: (error)=>{
          this.responseMsg = error.error
        }
       } )
      }
    }
  }




