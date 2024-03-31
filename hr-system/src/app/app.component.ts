import { Component } from "@angular/core";
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LoginService } from "src/services/login.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hr-system';

constructor(private loginService:LoginService){}

  isLoggedIn():boolean{
    return this.loginService.isLoggedIn();
  }
}

